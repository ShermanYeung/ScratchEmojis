//functions
function scanAllAndAddObservers(){
	//scan for RootCoomContainer
	let RootCommContainer = document.querySelector(css_RootCommContainer)
	addEmojisButton(RootCommContainer)

	//scan for all CommBubbles and add observers
	let CommBubbles = document.querySelectorAll(css_CommBubbles)
	if (CommBubbles.length){
		CommBubbles.forEach(e =>{
			if(!(e.SEisObserving)){
				CommBubblesObsever.observe(e,{childList:true})
				e.SEisObserving = true
			}	
		})
	}
}

function addEmojisButton(commBox){
	//check if the EmojisButton already exists,if not...
	if ((commBox)&&(commBox.matches("form"))&&(commBox.querySelector(`.${class_EmojisButton}`)==null)){
		
		//target core elements
		let uiBar = commBox.querySelector(css_CommUiBar)
		let wordsLeftText = uiBar.querySelector(css_WordsLeftText)

		if (isProfilePage){uiBar.classList.add("ScratchEmojisProfileUiBar")}

		//create EmojisButton
		let EmojisButton = document.createElement("div")

		EmojisButton.title = "Scratch Emojis"
		EmojisButton.className = class_EmojisButton
		if(isProfilePage){EmojisButton.classList.add("smaller")}

		EmojisButton.commBox = commBox
		EmojisButton.uiBar = uiBar

		EmojisButton.addEventListener("click", ()=>{
			addEmojisSelector(EmojisButton.uiBar)
		})

		//create EmojisIcon
		let EmojisIcon = document.createElement("img")

		EmojisIcon.src = getFileUrl("icons/taco.svg")
		EmojisIcon.classList.add("EmojisIcon","unselectable")

		//append the elements
		EmojisButton.appendChild(EmojisIcon)    
		uiBar.insertBefore(EmojisButton,wordsLeftText)
	}   
}

function addEmojisSelector(uiBar){
	// check if SelContainer exists...
	if(!(uiBar.querySelector(".EmojisSelectorContainer"))){

		//if it doesn't,append the element
		let wordsLeftText = uiBar.querySelector(css_WordsLeftText)
		let SelContainer = document.createElement("div")
		let EmojisSelector = document.createElement("div")
		
		SelContainer.className = "EmojisSelectorContainer"
		EmojisSelector.className = "EmojisSelector"
		EmojisSelector.parent = uiBar.parentElement
		setEmojisSelectorContent(EmojisSelector)

		SelContainer.appendChild(EmojisSelector)
		uiBar.insertBefore(SelContainer,wordsLeftText)

	}else{
		// if it exists, remove the SelContainer
		let SelContainer = uiBar.querySelector(".EmojisSelectorContainer")
		uiBar.removeChild(SelContainer)
	}
}

function setEmojisSelectorContent(EmojisSelector){
	//append search bar
	let SearchBar = document.createElement("input");SearchBar.classList.add("SearchEmojis");SearchBar.placeholder = "🔎︎ Search..."
	SearchBar.EmojisSelector = EmojisSelector

	EmojisSelector.appendChild(SearchBar)
	listenSearchBar(SearchBar)
	setTimeout(()=>{SearchBar.focus()},0)
	

	//append Emojis container
	let EmojisContainer = document.createElement("div");EmojisContainer.className = "EmojisContainer"
	EmojisSelector.appendChild(EmojisContainer)

	//append all Emojis
	for (let value of EmojisData){

		//get data from dict
		let emojiSource = value[0]
		let representingValue = value[1]
		let searchKeywords = value[2]
		
		//create the emoji div
		let emoji = document.createElement("div");emoji.classList.add("ScratchEmojisEmoji","unselectable")

		emoji.title = searchKeywords
		emoji.representingValue = representingValue
		emoji.searchKeywords = searchKeywords
		emoji.EmojisSelector = EmojisSelector

		if(emojiSource.length>0){
			//it has an image = create img
			let emojiImage = document.createElement("img");emojiImage.src = emojiSource;emojiImage.classList.add("ScratchEmojisImage","unselectable")
			emoji.appendChild(emojiImage)

		}else{
			//the emoji has no image = set inner text
			emoji.innerText = representingValue
			let represValLength = representingValue.length
			if(represValLength>3){emoji.style.fontSize = (50*(1/represValLength)) + "px"}   //set font size
		}

		listenClickEmoji(emoji)
		EmojisContainer.appendChild(emoji)	
	}
}

function listenSearchBar(searchBar){
	//click event
	searchBar.addEventListener("click", ()=>{searchBar.value = "";searchBar.dispatchEvent(new Event("input",{ bubbles: true }))})

	//input event
	searchBar.addEventListener("input", ()=>{
		let EmojisContainer = searchBar.EmojisSelector.querySelector(".EmojisContainer")
		let AllEmojis = EmojisContainer.childNodes
		let searching =  searchBar.value.toLowerCase()
		
		//filter emojis to show
		for (let everyEmoji of AllEmojis){

			if(everyEmoji.searchKeywords.toLowerCase().includes(searching)){
				everyEmoji.style.display = "inline-block"
			}else{everyEmoji.style.display = "none"}
		}
	})
}

function listenClickEmoji(emoji){
	emoji.addEventListener("click", ()=>{

		//locate textarea (note:parent is an attribute set before.)
		let container = emoji.EmojisSelector.parent
		let textArea = container.querySelector(css_textArea)

		//init vars for adding the representing value.
		let representingValue = emoji.representingValue
		let selectionStart = textArea.selectionStart
		let SelectionEnd = textArea.selectionEnd
		let NewSelectionStart = selectionStart
		let upperString = ""
		let lowerString = ""

		//collect the upper part of the textarea value.(if it is not the space)
		for(let eachCharacter of Array(selectionStart).keys()){
			if(!(eachCharacter==(Array(selectionStart).length-1) && textArea.value[eachCharacter]==" ")){
				upperString += textArea.value[eachCharacter]
			}else{NewSelectionStart -= 1}
		}
		//collect the lower  part of the textarea value.(if it is not the space)
		for(let eachCharacter=SelectionEnd; eachCharacter<textArea.value.length ; eachCharacter++){
			if(!(eachCharacter==SelectionEnd && textArea.value[eachCharacter]==" ")){
				lowerString += textArea.value[eachCharacter]
			}
		}
		//add the reporesenting value
		textArea.value = (upperString + representingValue + lowerString);textArea.dispatchEvent(new Event("input",{ bubbles: true }))

		NewSelectionStart += representingValue.length
		textArea.setSelectionRange(NewSelectionStart,NewSelectionStart)
		textArea.focus()
	})
}

//mutation observers 
const CommBubblesObsever = new MutationObserver(mutations => {
	//for each of all the mutations...
	mutations.forEach(mutation => {

		//for every addedNode in the mutation...
		mutation.addedNodes.forEach(e => {
			//to make sure that the added node is of type 1 (an element node)
			if(e.nodeType==1){  
				//if it is a form,set CommForm to the node;or else find the form
				let CommForm
				if(e.tagName=="FORM"){CommForm = e}else{CommForm = e.querySelector("form")}
				addEmojisButton(CommForm)
			}    
		})

	})
})






















//init vars
var isProfilePage = window.location["href"].includes("users")
var DOMcheck

var css_CommBubbles
var css_RootCommContainer
var css_textArea
var css_CommUiBar
var css_WordsLeftText
var class_EmojisButton = "EmojisButton"

if (isProfilePage){
	//profile  page parameter settings
	css_CommBubbles = "[data-content='reply-form']"
	css_RootCommContainer = "#main-post-form"
	css_textArea = "[name='content']"
	css_CommUiBar = ".control-group:not(.tooltip)"
	css_WordsLeftText = ".notification"
}else{
	//projects and studio parameter settings
	css_CommBubbles = ".flex-row.comment-body.column"
	css_RootCommContainer = ".full-width-form"
	css_textArea = "[name='compose-comment']"
	css_CommUiBar = ".flex-row.compose-bottom-row"
	css_WordsLeftText = ".compose-limit.compose-valid"
}


//init vars: different types of DOM checks
DOMcheck = setInterval(scanAllAndAddObservers,150)
document.addEventListener("click",scanAllAndAddObservers,true)