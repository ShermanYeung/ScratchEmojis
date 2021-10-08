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
    getFileUrl("images/cat.png"),
    getFileUrl("images/gobo.png"),
    getFileUrl("images/waffle.png"),
    getFileUrl("images/taco.png"),
    getFileUrl("images/sushi.png"),
    getFileUrl("images/pizza.png"),
    getFileUrl("images/candycorn.png"),
    getFileUrl("images/apple.png"),
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/cupcake.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/aww-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/cool-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/tongue-out-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/wink-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/lol-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/upside-down-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/fav-it-cat.png",
    "https://cdn.scratch.mit.edu/scratchr2/static/__501e3cae5b743556f38593e79f08a620__/images/easter_eggs/pizza-cat.png"
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
    " _:D<_ "
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
ButtonImage.src = getFileUrl("images/whiteCat.png")
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
ExitButton.src = getFileUrl("images/exit.png")
ExitButton.classList.add("ResizableItem")

ExitButtonContainer.appendChild(ExitButton)

//create element: text container&label(inside popup)
PopupTextContainer = document.createElement("div")
PopupTextContainer.id = "PopupTextContainer"
PopupTextContainer.classList.add("NormalBanner")

EmojiContainer.appendChild(PopupTextContainer)

PopupText = document.createElement("div")
PopupText.id = "PopupText"
PopupText.innerText = "Choose emojis:"
PopupText.classList.add("NormalBanner")

PopupTextContainer.appendChild(PopupText)


//create elements: Emoji Images(inside popup)
for (let i=0;i<EmojiImgSources.length;i++){
    //Emojis
    AllEmojiElements.push(document.createElement("img"))
    AllEmojiElements[i].src = EmojiImgSources[i]
    AllEmojiElements[i].innerText = "Emoji" + i
    AllEmojiElements[i].classList.add("ResizableItem")
    AllEmojiElements[i].classList.add("Emoji")


    //EmojiSmallContainer
    EmojiSmallContainer = document.createElement("span")
    EmojiSmallContainer.id = "EmojiSmallContainer"+i
    EmojiSmallContainer.classList.add("EmojiSmallContainer")


    EmojiContainer.appendChild(EmojiSmallContainer)
    EmojiSmallContainer.appendChild(AllEmojiElements[i])

}

//document extra stylesheets (x2)
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
        EmojiString = ""
        Undo = []

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
document.addEventListener("click",function(){
    if ((!(EmojiContainerHover))&&(EmojiContainerJustOpened==false)){
        ShowEmojiContainer = false
    }
})

//exit the popup menu by pressing "exit"
ExitButton.onclick = function(){
    if (EmojiContainerJustOpened==false){
        ShowEmojiContainer = false
    }
}

//input the corresponding keys when the emojis are pressed

for (let i=0;i<AllEmojiElements.length;i++){
    AllEmojiElements[i].onclick = function(){

        let CorrespondingKeys = EmojiKeyboardData[i]
        CommentBox = document.getElementsByName("compose-comment")[0]

        //set the last value of EmojiString.
        Undo.push(EmojiString)

        EmojiString += CorrespondingKeys

        //append a temp element
        tempInput = document.createElement("input")
        tempInput.value = EmojiString
        document.body.appendChild(tempInput)

        
        tempInput.select()
        document.execCommand("copy")
        tempInput.remove()
        
        CommentBox.focus()

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


    ExitButtonContainer.style.left = (320-75-10) + "px" 
    ExitButtonContainer.style.top = (450-35-10) + "px"
    

    //update the popup text
    ExposingCharacters = 25
    if (EmojiString==""){
        PopupText.innerText = "Choose Emojis:"
    }else{
        if (EmojiString.length<=ExposingCharacters){
            PopupText.innerText = EmojiString
        }else{
            tempString = ""
            for (let i=0;i<ExposingCharacters;i++){
                tempString += EmojiString[i]
            }
            tempString += "..."

            PopupText.innerText = tempString
        }
        
    }
    




    //other functions





    //timers
    if ((Timer-LastEmojiContainerPopupTimer)>0){
        EmojiContainerJustOpened = false
    }
    Timer += 1
},0)