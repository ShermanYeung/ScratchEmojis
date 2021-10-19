//init variables
var mousex = 0
var mousey = 0
var Timer = 0
var y = 0

var EmojiContainerX = 0
var EmojiContainerY = 0

var LastEmojiContainerPopupTimer = Timer
var ContainerScrollY = y


var ShowEmojiContainer = false
var EmojiContainerHover = false
var EmojiContainerJustOpened = false

var EmojiString = ""
var Undo = []
var AllEmojiElements = []





function getFileUrl(file){
    return localStorage.getItem("ScratchEmojisExtensionId")+file
}


var EmojiImgSources = [
    getFileUrl("images/cat.svg"),
    getFileUrl("images/gobo.svg"),
    getFileUrl("images/waffle.svg"),
    getFileUrl("images/taco.svg"),
    getFileUrl("images/sushi.svg"),
    getFileUrl("images/pizza.svg"),
    getFileUrl("images/candycorn.svg"),
    getFileUrl("images/apple.svg"),
    getFileUrl("images/cupcake.svg"),
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/aww-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/cool-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/tongue-out-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/wink-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/lol-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/upside-down-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/fav-it-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/pizza-cat.png",
    "https://scratch.mit.edu/images/emoji/love-it-cat.png",
    "https://scratch.mit.edu/images/emoji/rainbow-cat.png",
    "https://scratch.mit.edu/images/emoji/huh-cat.png",
    getFileUrl("images/broccoli.svg"),
    getFileUrl("images/camera.svg"),
    getFileUrl("images/compass.svg"),
    getFileUrl("images/suitcase.svg"),
    getFileUrl("images/map.svg"),
    getFileUrl("images/binoculars.svg"),
    getFileUrl("images/10mil.svg"),
    getFileUrl("images/pride.svg"),
    getFileUrl("images/blm.svg")
]

var EmojiKeyboardData = [
    " _meow_ ",
    " _gobo_ ",
    " _waffle_ ",
    " _taco_ ",
    " _sushi_ ",
    " _pizza_ ",
    " _candycorn_ ",
    " _apple_ ",
    " _cupcake_ ",
    " _:)_ ",
    " _:D_ ",
    " _B)_ ",
    " _:P_ ",
    " _;P_ ",
    " _:'P_ ",
    " _P:_ ",
    " _**_ ",
    " _:D<_ ",
    " _<3_ ",
    " _:))_ ",
    " _:3_ ",
    " _broccoli_ ",
    " _camera_ ",
    " _compass_ ",
    " _suitcase_ ",
    " _map_ ",
    " _binoculars_ ",
    " _10mil_ ",
    " _pride_ ",
    " _blm_ "
]


var EmojiDescriptions = [
    "meow cat head cute hey :D hello hi",
    "gobo head cute hey :D hello hi",
    "food waffle yummy",
    "food taco yummy burger",
    "food sushi japan yummy",
    "food pizza italy yummy",
    "food candycorn halloween egg yummy",
    "food apple fruit healthy plant yummy",
    "food cupcake yummy",
    "OuO cat head cute",
    "happy :D cat delighted head cute",
    "cat cool guy sunglasses head gg lol haha nice cute",
    "cat tongue eyes closed happy head cute",
    "wink blink tongue cat happy delighted head cute",
    "cat lol xD XD xd funny laughing haha tears head cry cute ",
    "upside-down-cat tongue head cute",
    "favourite stars cat wow project head cute excited yay",
    "food pizza cat happy eating head cute yummy",
    "love-it-cat happy heart red lovely project head cute excited yay",
    "happy delighted cat rainbow colorful colourful haha head cute",
    "cat hmm huh what? head cute jealous ;-; :3 quite bruh",
    "food broccoli vegetables healthy green plant yummy",
    "travel camera photo view",
    "travel compass directions",
    "travel suitcase business bag",
    "travel map position paper",
    "travel binoculars view glasses",
    "10mil congrats congratulations yay :D woah confetti",
    "flag pride colorful colourful rainbow blm",
    "blm black lives matter hands "
]








//experimental: element dragging

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {

    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {

    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



CommentBoxDiv = document.getElementsByClassName("flex-row compose-bottom-row")[0]

//create element: AddEmoji button(in the comment section)
AddEmoji = document.createElement("div")
AddEmoji.id = "AddEmoji"
//AddEmoji.innerText = "Emojis"

CommentBoxDiv.insertBefore(AddEmoji,document.getElementsByClassName("compose-limit compose-valid")[0])

//button img
ButtonImage = document.createElement("img")
ButtonImage.src = getFileUrl("images/whiteCat.svg")
ButtonImage.id = "AddEmojiButtonImg"

AddEmoji.appendChild(ButtonImage)

//button text
ButtonText = document.createElement("span")
ButtonText.innerText = "  Emojis"
ButtonText.id = "AddEmojisButtonText"

AddEmoji.appendChild(ButtonText)


//create element: EmojiContainer (popup)
EmojiContainer = document.createElement("div")
EmojiContainer.id = "EmojiContainer"

document.body.appendChild(EmojiContainer)
dragElement(EmojiContainer)


//create element: exit container&button
ExitButtonContainer = document.createElement("div")
ExitButtonContainer.id = "ExitButtonContainer"

EmojiContainer.appendChild(ExitButtonContainer)

ExitButton = document.createElement("img")
ExitButton.id = "ExitButton"
ExitButton.src = getFileUrl("images/exit.svg")
ExitButton.classList.add("ResizableItem")

ExitButtonContainer.appendChild(ExitButton)

//create element: undo container&button
UndoButtonContainer = document.createElement("div")
UndoButtonContainer.id = "UndoButtonContainer"

EmojiContainer.appendChild(UndoButtonContainer)

UndoButton = document.createElement("img")
UndoButton.id = "UndoButton"
UndoButton.src = getFileUrl("images/undo.svg")
UndoButton.classList.add("ResizableItem")

UndoButtonContainer.appendChild(UndoButton)



//create element: text container&label(inside popup)
PopupTextContainer = document.createElement("div")
PopupTextContainer.id = "PopupTextContainer"

EmojiContainer.appendChild(PopupTextContainer)

PopupText = document.createElement("div")
PopupText.id = "PopupText"
PopupText.innerText = "Choose Emojis:"

PopupTextContainer.appendChild(PopupText)


//create element: search bar
SearchBar = document.createElement("textarea")
SearchBar.id = "SearchEmojis"
SearchBar.placeholder = "Search for emojis..."

EmojiContainer.appendChild(SearchBar)

//create element: clear search container&button
ClearSearchContainer = document.createElement("div")
ClearSearchContainer.id = "ClearSearchContainer"

EmojiContainer.appendChild(ClearSearchContainer)

ClearSearch = document.createElement("img")
ClearSearch.id = "ClearSearch"
ClearSearch.src = getFileUrl("images/clear.svg")
ClearSearch.classList.add("ResizableItem")

ClearSearchContainer.appendChild(ClearSearch)



//create element: Emoji content container
EmojiContentContainer = document.createElement("div")
EmojiContentContainer.id = "EmojiContentContainer"

EmojiContainer.appendChild(EmojiContentContainer)


//create elements: Emoji Images(inside popup)
for (let i=0;i<EmojiImgSources.length;i++){
    
    
    //EmojiSmallContainer
    EmojiSmallContainer = document.createElement("span")
    EmojiSmallContainer.id = "EmojiSmallContainer"+i
    EmojiSmallContainer.classList.add("EmojiSmallContainer")
    

    //Emojis
    TheEmoji = document.createElement("img")
    TheEmoji.src = EmojiImgSources[i]
    TheEmoji.id = "Emoji" + i
    TheEmoji.classList.add("ResizableItem")
    TheEmoji.classList.add("Emoji")
    TheEmoji.title = EmojiKeyboardData[i]

    EmojiSmallContainer.appendChild(TheEmoji)
    

    AllEmojiElements.push(EmojiSmallContainer)
    EmojiContentContainer.appendChild(EmojiSmallContainer)
    

}

//document extra stylesheets
Stylesheet = document.createElement("link")
Stylesheet.rel = "stylesheet"
Stylesheet.classList.add("Scratch_Emojis_Stylesheet")
Stylesheet.href = getFileUrl("Stylesheets/MainStyle.css")
document.body.appendChild(Stylesheet)



//event listeners

//AddEmoji button clicked==>popup menu
AddEmoji.addEventListener("click",function(event){

    if (ShowEmojiContainer==false){
        mousex = event.x
        mousey = event.y
        ContainerScrollY = y

        ShowEmojiContainer = true
        EmojiContainerJustOpened = true

        LastEmojiContainerPopupTimer = Timer

        CommentBox = document.getElementsByName("compose-comment")[0]
        Undo = [CommentBox.value]

        EmojiContainerX = mousex
        EmojiContainerY = mousey+ContainerScrollY-200

        EmojiContainer.style.left = EmojiContainerX + "px"
        EmojiContainer.style.top = EmojiContainerY + "px"

    }else{
        ShowEmojiContainer = false
    }

})

//check mouse inside the emoji container
EmojiContainer.addEventListener("mouseover",function(){
    EmojiContainerHover = true
})
EmojiContainer.addEventListener("mouseleave",function(){
    EmojiContainerHover = false
})



//click outside=hide container
/*
document.addEventListener("click",function(){
    if ((!(EmojiContainerHover))&&(EmojiContainerJustOpened==false)){
        ShowEmojiContainer = false
    }
})
*/

//exit the popup menu by pressing "exit"
ExitButton.onclick = function(){
    if (EmojiContainerJustOpened==false){
        ShowEmojiContainer = false
    }
}

//click the search bar = focus
SearchBar.onclick = function(){
    SearchBar.focus()
}

//click clear search = clear search
ClearSearch.onclick = function(){
    SearchBar.value = ""
    SearchBar.focus()
}




UndoButton.onclick = function(){
    CommentBox = document.getElementsByName("compose-comment")[0]

    if (Undo.length > 0){
        CommentBox.value = Undo[Undo.length-1]
        CommentBox.dispatchEvent(new Event("input",{ bubbles: true }))
        Undo.pop(Undo.length-1)
   
    }
    CommentBox = document.getElementsByName("compose-comment")[0]
    if (!(CommentBox==undefined)){
        CommentBox.focus()
    }
    
}

//input the corresponding keys when the emojis are pressed

for (let i=0;i<AllEmojiElements.length;i++){
    AllEmojiElements[i].onclick = function(){

        let CorrespondingKeys = EmojiKeyboardData[i]
        PopupText.innerText = CorrespondingKeys
        CommentBox = document.getElementsByName("compose-comment")[0]

        
        Undo.push(CommentBox.value)
        CommentBox.blur()

        setTimeout(function(){
            
            CommentBox.value += CorrespondingKeys
            CommentBox.dispatchEvent(new Event("input",{ bubbles: true }))
            CommentBox.focus()
            
        },2)
        
    }
}





//forever loop (things that have to be updated every frame)
setInterval(function(){
    //update variables
    y = window.scrollY


    //emoji-container-related stuffs
    if (ShowEmojiContainer){
        EmojiContainer.style.display = "block"
    }
    else{
        EmojiContainer.style.display = "none"
    }

    if (EmojiContainerHover|(SearchBar == document.activeElement)){
        EmojiContainer.style.opacity = "100%"
    }else{
        EmojiContainer.style.opacity = "40%"
    }


    ExitButtonContainer.style.left = (320-16) + "px" 
    ExitButtonContainer.style.top = (0-8) + "px"

    UndoButtonContainer.style.left = (320-10-90) + "px" 
    UndoButtonContainer.style.top = (498-35-10) + "px"
    
    

    //declare the visibility of the emojis
    for (let i=0;i<AllEmojiElements.length;i++){
        if (SearchBar.value==""){
            AllEmojiElements[i].style.display = "inline-block"
        }else{
            if(EmojiDescriptions[i].includes(SearchBar.value)){
                AllEmojiElements[i].style.display = "inline-block"
            }else{
                AllEmojiElements[i].style.display = "none"
            }
        }
    }


    //other functions





    //timers
    if ((Timer-LastEmojiContainerPopupTimer)>0){
        EmojiContainerJustOpened = false
    }
    Timer += 1
},0)