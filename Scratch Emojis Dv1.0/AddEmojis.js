var EmojiContainerX = 0
var EmojiContainerY = 0

var ContainerScrollY = 0
var FocusingTextboxId = 0

var ShowEmojiContainer = false
var EmojiContainerHover = false

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
    getFileUrl("images/blm.svg"),
    "⌚️",
    "⏰",
    "⏱️",
    "⏲️",
    "⌨️",
    "☎️",
    "⌛️",
    "⚖️",
    "⚙️",
    "✉️",
    "✂️",
    "✒️",
    "☂️",
    "✏️",
    "☕️",
    "♟️",
    "⚰️",
    "⚱️",
    "⛏️",
    "⚔️",
    "⚒️",
    "⛓️",
    "⚗️",
    "⛑️",
    "⭐️",
    "✨",
    "⚡️",
    "☄️",
    "☀️",
    "⛅️",
    "☁️",
    "⛈️",
    "⛄️",
    "❄️",
    "☔️",
    "☘️",
    "☹️",
    "✌️",
    "☝️",
    "✍️",
    "✋",
    "☺️",
    "⚽️",
    "⚾️",
    "⛳️",
    "⛹️",
    "⛷️",
    "⛸️",
    "✈️",
    "⛵️",
    "Ⓜ️",
    "⚓️",
    "⛽️",
    "⛲️",
    "⛺️",
    "⛪️",
    "⛰️",
    "⛱️",
    "⛴️",
    "⛩️",
    "♨️",
    "❗️",
    "❕",
    "❓",
    "❔",
    "©️",
    "®️",
    "‼️",
    "⁉️",
    "™️",
    "➕",
    "➖",
    "➗",
    "✖️",
    "⛔",
    "⭕",
    "❌",
    "✔️",
    "〰️",
    "〽️",
    "⚠️",
    "☑️",
    "✅",
    "❎",
    "▶️",
    "⏩",
    "⏪",
    "⏫",
    "⏬",
    "ℹ️",
    "⏭️",
    "⏮️",
    "⏯️",
    "⏏️",
    "◀️",
    "➡️",
    "⬅️",
    "⬆️",
    "⬇️",
    "↗️",
    "↘️",
    "↙️",
    "↖️",
    "↪️",
    "↩️",
    "⤴️",
    "⤵️",
    "✳️",
    "✴️",
    "❇️",
    "㊗️",
    "㊙️",
    "⚕️",
    "☦️",
    "♾️",
    "⚛️",
    "⛎️",
    "✝️",
    "☪️",
    "☮️",
    "☯️",
    "☸️",
    "♈️",
    "♉️",
    "♊️",
    "♋️",
    "♌️",
    "♍️",
    "♎️",
    "♏️",
    "♐️",
    "♑️",
    "♒️",
    "♓️",
    "❤️",
    "❣️",
    "♠️",
    "♣️",
    "♥️",
    "♦️",
    "♀️",
    "♂️",
    "♻️",
    "☢️",
    "☣️",
    "⚜️",
    "➰️",
    "➿️",
    "☠️",
    "⬛️",
    "⬜️",
    "⚪️",
    "⚫️",
    "▪️",
    "▫️",
    "◻️",
    "◼️",
    "◽️",
    "◾️"

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
    " _blm_ ",
    "⌚️",
    "⏰",
    "⏱️",
    "⏲️",
    "⌨️",
    "☎️",
    "⌛️",
    "⚖️",
    "⚙️",
    "✉️",
    "✂️",
    "✒️",
    "☂️",
    "✏️",
    "☕️",
    "♟️",
    "⚰️",
    "⚱️",
    "⛏️",
    "⚔️",
    "⚒️",
    "⛓️",
    "⚗️",
    "⛑️",
    "⭐️",
    "✨",
    "⚡️",
    "☄️",
    "☀️",
    "⛅️",
    "☁️",
    "⛈️",
    "⛄️",
    "❄️",
    "☔️",
    "☘️",
    "☹️",
    "✌️",
    "☝️",
    "✍️",
    "✋",
    "☺️",
    "⚽️",
    "⚾️",
    "⛳️",
    "⛹️",
    "⛷️",
    "⛸️",
    "✈️",
    "⛵️",
    "Ⓜ️",
    "⚓️",
    "⛽️",
    "⛲️",
    "⛺️",
    "⛪️",
    "⛰️",
    "⛱️",
    "⛴️",
    "⛩️",
    "♨️",
    "❗️",
    "❕",
    "❓",
    "❔",
    "©️",
    "®️",
    "‼️",
    "⁉️",
    "™️",
    "➕",
    "➖",
    "➗",
    "✖️",
    "⛔",
    "⭕",
    "❌",
    "✔️",
    "〰️",
    "〽️",
    "⚠️",
    "☑️",
    "✅",
    "❎",
    "▶️",
    "⏩",
    "⏪",
    "⏫",
    "⏬",
    "ℹ️",
    "⏭️",
    "⏮️",
    "⏯️",
    "⏏️",
    "◀️",
    "➡️",
    "⬅️",
    "⬆️",
    "⬇️",
    "↗️",
    "↘️",
    "↙️",
    "↖️",
    "↪️",
    "↩️",
    "⤴️",
    "⤵️",
    "✳️",
    "✴️",
    "❇️",
    "㊗️",
    "㊙️",
    "⚕️",
    "☦️",
    "♾️",
    "⚛️",
    "⛎️",
    "✝️",
    "☪️",
    "☮️",
    "☯️",
    "☸️",
    "♈️",
    "♉️",
    "♊️",
    "♋️",
    "♌️",
    "♍️",
    "♎️",
    "♏️",
    "♐️",
    "♑️",
    "♒️",
    "♓️",
    "❤️",
    "❣️",
    "♠️",
    "♣️",
    "♥️",
    "♦️",
    "♀️",
    "♂️",
    "♻️",
    "☢️",
    "☣️",
    "⚜️",
    "➰️",
    "➿️",
    "☠️",
    "⬛️",
    "⬜️",
    "⚪️",
    "⚫️",
    "▪️",
    "▫️",
    "◻️",
    "◼️",
    "◽️",
    "◾️"
    
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
    "happy :D cat delighted head cute baby",
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
    "travel digital camera photo view",
    "travel compass directions",
    "travel suitcase business bag",
    "travel map position paper",
    "travel binoculars view glasses",
    "10mil congrats congratulations yay :D woah confetti",
    "flag pride colorful colourful rainbow blm black lives matter",
    "blm black lives matter hands ",
    "⌚️ clock time",
    "⏰ alarm clock morning time",
    "⏱️ clock stopwatch time",
    "⏲️ clock time",
    "⌨️ keyboard computer buttons",
    "☎️ telephone call ring red",
    "⌛️ funnel time sand",
    "⚖️ scales balance weight golden fair",
    "⚙️ gear settings iron tool",
    "✉️ mail scratch notificarions paper",
    "✂️ scissors stationary sharp tool",
    "✒️ scaler razor tool iron sharp",
    "☂️ purple rain umbrella wet",
    "✏️ pencil stationary yellow",
    "☕️ coffee tea cup hot drinks relax",
    "♟️ european chess",
    "⚰️ brown coffin",
    "⚱️ golden vase expensive",
    "⛏️ pick axe hammer tool iron hard heavy",
    "⚔️swords daggers knife knight ninja weapon fight",
    "⚒️ hammer iron heavy tool",
    "⛓️ chains iron lock",
    "⚗️ alembic water aquarium fish glass bowl",
    "⛑️ safety helmet health hp equipment",
    "⭐️ star favourite shape yellow",
    "✨ sparkles stars colorful bright",
    "⚡️thunderstorm rain electrical power weather nature",
    "☄️ meteor fire flame rock nature",
    "☀️sunny yellow brightweather weather nature",
    "⛅️rainy showers cloudy sun weather nature",
    "☁️ cloudy nature weather sad",
    "⛈️ raining cloudy weather sad bad nature thunder",
    "⛄️ snowman christmas cold decoration weather nature snowy",
    "❄️ snowflake christmas cold nature weather snowy",
    "☔️umbrella rainy nature weather",
    "☘️ nature green leaf life",
    "☹️ sad bad upset :( head",
    "✌️ yay yes happy 2 v hand fingers",
    "☝️ this one hand fingers",
    "✍️ writing hand pencil pen fingers",
    "✋stop hand fingers",
    "☺️ head smile happy :)",
    "⚽️ sports soccer football",
    "⚾️ sports tennis ball",
    "⛳️ golf flag hill sports",
    "⛹️ basketball guy sporty",
    "⛷️ iceskating man sports guy sporty",
    "⛸️ shoes iceskating sporty equipment roller skates",
    "✈️ aeroplane flight travel transportation",
    "⛵️ sailboat sports transportation ship sea",
    "Ⓜ️ m M logo cyan",
    "⚓️ anchor sailer ship boat transportation sea",
    "⛽️fuel pump gas station orange",
    "⛲️ fountain water bowl",
    "⛺️ camping hiking mountains hills ",
    "⛪️ school home building church",
    "⛰️ mountains hills everest nature",
    "⛱️ beach sand umbrella holiday",
    "⛴️ ferry transportation ship boat sea",
    "⛩️ shinto shrine arch red door",
    "♨️ hot heat drink",
    "❗️ danger alert be careful exclamation mark punctuations !",
    "❕ danger alert be careful exclamation mark punctuations !",
    "❓ question mark what ? punctuations",
    "❔ question mark what ? punctuations",
    "©️ copyright cooperation",
    "®️ registered trademark symbol",
    "‼️ punctuations exclamation marks",
    "⁉️ punctuations exclamation mark what ? question mark huh !",
    "™️ tm trade mark",
    "➕ plus addition maths",
    "➖ minus subtraction maths",
    "➗ division divide maths",
    "✖️ times multiplication maths cross",
    "⛔stop access denied warning sign",
    "⭕circle correct go sign",
    "❌ cross wrong sign exam",
    "✔️ correct green mark sign tick",
    "〰️ metal wire line",
    "〽️ stocks rise and fall yellow line",
    "⚠️ sign alert be careful dangerous yellow !",
    "☑️ correct green mark sign tick blue square",
    "✅ correct green mark sign tick square",
    "❎ cross wrong sign green square",
    "▶️ video music play square resume arrows",
    "⏩ next song video square arrows skip",
    "⏪ video song previous back arrows skip",
    "⏫ upper video song arrows skip",
    "⏬ downwards video song arrows skip",
    "ℹ️ information more",
    "⏭️ next song video square end jump arrows skip",
    "⏮️ previous song video square start jump arrows skip",
    "⏯️ pause play video song arrows skip square",
    "⏏️ arrows up skip square",
    "◀️ arrows left square",
    "➡️ arrows right square",
    "⬅️ arrows left square",
    "⬆️ arrows up square",
    "⬇️ arrows down square",
    "↗️ upper right arrow",
    "↘️ lower right arrow",
    "↙️ lower left arrow",
    "↖️ upper left arrow",
    "↪️ back undo redo arrow square",
    "↩️ back undo redo arrow square",
    "⤴️ up arrow square",
    "⤵️ down arrow square",
    "✳️ star asterisk green square",
    "✴️ sparkle explosive orange square",
    "❇️ green square sun bright light shine",
    "㊗️ zhu red warning chinese word circle",
    "㊙️ mi red warning chinese word circle",
    "⚕️ medic square",
    "☦️ orthodox cross square",
    "♾️ infinite n 8 square",
    "⚛️ atom chemistry square",
    "⛎️ ophiuchus square purple constellation",
    "✝️ christian square",
    "☪️ star and crescent moon square ",
    "☮️ peace square",
    "☯️ chinese yinyang square",
    "☸️ wheel of dharma square",
    "♈️ aries square purple constellation",
    "♉️ taurus square purple constellation",
    "♊️ gemini square purple constellation",
    "♋️ cancer square purple constellation",
    "♌️ leo square purple constellation",
    "♍️ virgo square purple constellation",
    "♎️ libra square purple constellation",
    "♏️ scorpius square purple constellation",
    "♐️ sagittarius square purple constellation",
    "♑️ capricorn square purple constellation",
    "♒️ aquarius square purple constellation",
    "♓️ pisces square purple constellation",
    "❤️ heart love red fire",
    "❣️ heart love red fire punctuation exclamation mark !",
    "♠️ pips sword cards black symbol",
    "♣️ pips club cards black symbol",
    "♥️ pips heart love cards black",
    "♦️ pips black diamond cards",
    "♀️ girl female symbol gender",
    "♂️ gender boy masculine symbol",
    "♻️ green environmentally friendly recycle",
    "☢️ radioactive dangerous warning symbol",
    "☣️ biohazard warning symbol dangerous",
    "⚜️ fleur-de-lis decoration badge scouts",
    "➰️ curly loop blue line",
    "➿️ double curly loop blue line square ",
    "☠️ toxic dangerous skull skeleton die bones",
    "⬛️ black square shape",
    "⬜️ white square shape",
    "⚪️ white circle shape",
    "⚫️ black circle shape",
    "▪️ square solid black shape",
    "▫️ square hollow shape",
    "◻️ white square shape",
    "◼️ black square solid shape",
    "◽️ white square solid shape",
    "◾️ black square solid shape"
]





//element dragging

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








//create element: EmojiContainer (popup)
EmojiContainer = document.createElement("div")
EmojiContainer.id = "EmojiContainer"
EmojiContainer.style.display = "none"

document.body.appendChild(EmojiContainer)
dragElement(EmojiContainer)


//create element: undo container & button
UndoButtonContainer = document.createElement("div")
UndoButtonContainer.id = "UndoButtonContainer"

EmojiContainer.appendChild(UndoButtonContainer)

UndoButton = document.createElement("img")
UndoButton.id = "UndoButton"
UndoButton.src = getFileUrl("images/undo.svg")
UndoButton.classList.add("ResizableItem")

UndoButtonContainer.appendChild(UndoButton)

UndoButtonContainer.style.left = (320-10-90) + "px" 
UndoButtonContainer.style.top = (498-35-10) + "px"



//create element: text container & label
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
if(window.location["href"].includes("users")){SearchBar.classList.add("profile")}

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
    EmojiSmallContainer.title = EmojiDescriptions[i]

    //Emojis
    if(EmojiImgSources[i].includes("://")){
        TheEmoji = document.createElement("img")
        TheEmoji.src = EmojiImgSources[i]
        TheEmoji.id = "Emoji" + i
        TheEmoji.classList.add("ResizableItem")
        TheEmoji.classList.add("Emoji")
        

        EmojiSmallContainer.appendChild(TheEmoji)
    }else{
        EmojiSmallContainer.innerText = EmojiImgSources[i]
    }
    
    

    AllEmojiElements.push(EmojiSmallContainer)
    EmojiContentContainer.appendChild(EmojiSmallContainer)
    

}

//document extra stylesheets
Stylesheet = document.createElement("link")
Stylesheet.rel = "stylesheet"
Stylesheet.classList.add("Scratch_Emojis_Stylesheet")
Stylesheet.href = getFileUrl("Stylesheets/MainStyle.css")

document.body.appendChild(Stylesheet)








//create AddEmoji button
function createAddEmojiButton(target){

    let tempList = []
    if (window.location["href"].includes("users")){
        condition = (!(target.getElementsByClassName("button small grey").length==0))&&((target.getElementsByClassName("AddEmoji").length==0))
    }else{
        condition = (target.getElementsByClassName("AddEmoji").length==0)
    }

    ProfilePage = window.location["href"].includes("users")

    if (condition){

        //AddEmoji list id:0
        tempList.push(document.createElement("div"))
        tempList[0].id = "AddEmoji"
        tempList[0].classList.add("AddEmoji")
        if (ProfilePage){tempList[0].classList.add("smaller")}

        //create button img id:1
        tempList.push(document.createElement("img"))
        tempList[1].src = getFileUrl("images/whiteCat.svg")
        tempList[1].id = "AddEmojiButtonImg"
        if (ProfilePage){tempList[1].classList.add("smaller")}

        tempList[0].appendChild(tempList[1])

        
        //create button text id:2
        tempList.push(document.createElement("span"))
        tempList[2].innerText = "Emojis"
        tempList[2].id = "AddEmojisButtonText"
        if(ProfilePage){tempList[2].classList.add("smaller")}

        tempList[0].appendChild(tempList[2])


        if (ProfilePage){
            target.appendChild(tempList[0])
        }else{
            target.insertBefore(tempList[0],target.getElementsByClassName("compose-limit compose-valid")[0])
        }

        //AddEmoji button clicked==>popup menu
        tempList[0].addEventListener("click",function(event){

            function setAddEmojiProperties(){
                if(ShowEmojiContainer==true){
                    tempList[2].innerText = " Close"
                    tempList[0].style.backgroundColor = "#ff6a2f"
                    tempList[1].src = getFileUrl("images/cross.svg")
                }else{
                    tempList[2].innerText = "Emojis"
                    tempList[0].style.backgroundColor = "#ffb32f"
                    tempList[1].src = getFileUrl("images/whiteCat.svg")
                }
            }


            if (ShowEmojiContainer==false){
                let mousex = event.x
                let mousey = event.y
                ContainerScrollY = window.scrollY

                ShowEmojiContainer = true

                //find the corresponding textbox id
                if (window.location["href"].includes("users")){
                    ClassName = "control-group"
                }else{
                    ClassName = "flex-row compose-bottom-row"
                }

                if(ClassName=="flex-row compose-bottom-row"){
                    Parent = tempList[0].closest(".flex-row.compose-bottom-row")
                    AllParents = document.getElementsByClassName("flex-row compose-bottom-row")
                }else{
                    Parent = tempList[0].closest(".control-group")
                    AllParents = document.getElementsByClassName("control-group")

                    if (window.location["href"].includes("users")){
                        //filter the items that are not the post, cancel rows
                        filter = []
                        for(let UnfilteredItem=0;UnfilteredItem<AllParents.length;UnfilteredItem++){

                            if(!(AllParents[UnfilteredItem].getElementsByClassName("button small grey").length==0)){
                                filter.push(AllParents[UnfilteredItem])
                            }

                        }
                        AllParents = filter

                    }
                    
                }
                

                for(let i=0;i<AllParents.length;i++){
                    if (AllParents[i]==Parent){
                        FocusingTextboxId = i
                        console.log(FocusingTextboxId)
                        
                        break
                    }
                }



                EmojiContainer.style.display = "block"
                setAddEmojiProperties()

                
                if (window.location["href"].includes("users")){
                    CommentBox = document.getElementsByName("content")[FocusingTextboxId]
                }else{
                    CommentBox = document.getElementsByName("compose-comment")[FocusingTextboxId]
                }

                Undo = [CommentBox.value]

                EmojiContainerX = mousex+50
                EmojiContainerY = mousey+ContainerScrollY-170

                EmojiContainer.style.left = EmojiContainerX + "px"
                EmojiContainer.style.top = EmojiContainerY + "px"

                SearchBar.value = ""
                SearchBar.dispatchEvent(new Event("input",{ bubbles: true }))

            }else{
                ShowEmojiContainer = false
                EmojiContainer.style.display = "none"
                setAddEmojiProperties()
            }


        })


    }
}

function scanAndCreateAddEmojiButtons(){
    

    if (window.location["href"].includes("users")){
        ClassName = "control-group"
    }else{
        ClassName = "flex-row compose-bottom-row"
    }
    
    CommentRows = document.getElementsByClassName(ClassName)

    if (window.location["href"].includes("users")){
        //filter the items that are not the post, cancel rows
        filter = []
        for(let UnfilteredItem=0;UnfilteredItem<CommentRows.length;UnfilteredItem++){

            if(!(CommentRows[UnfilteredItem].getElementsByClassName("button small grey").length==0)){
                filter.push(CommentRows[UnfilteredItem])
            }

        }
        CommentRows = filter
    }
    

    for(let i=0;i<CommentRows.length;i++){
        createAddEmojiButton(CommentRows[i])
    }
}

scanAndCreateAddEmojiButtons()



//check mouse inside the emoji container
EmojiContainer.addEventListener("mouseover",function(){
    EmojiContainerHover = true
    EmojiContainer.style.opacity = "100%"
})
EmojiContainer.addEventListener("mouseleave",function(){
    EmojiContainerHover = false
    EmojiContainer.style.opacity = "40%"
})





//click the search bar = focus
SearchBar.onclick = function(){
    SearchBar.focus()
}

//click clear search = clear search
ClearSearch.onclick = function(){
    SearchBar.value = ""
    SearchBar.dispatchEvent(new Event("input",{ bubbles: true }))
    SearchBar.focus()
}




UndoButton.onclick = function(){

    if (window.location["href"].includes("users")){
        CommentBox = document.getElementsByName("content")[FocusingTextboxId]
    }else{
        CommentBox = document.getElementsByName("compose-comment")[FocusingTextboxId]
    }

    if (!(CommentBox==undefined)){
        if (Undo.length > 0){
            CommentBox.value = Undo[Undo.length-1]
            CommentBox.dispatchEvent(new Event("input",{ bubbles: true }))
            Undo.pop(Undo.length-1)
    
        }

        CommentBox.focus()

    }else{
        //if the parent is no longer present, hide the emoji popup
        ShowEmojiContainer = false
        EmojiContainer.style.display = "none"
    }
    
    
}

//input the corresponding keys when the emojis are pressed

for (let i=0;i<AllEmojiElements.length;i++){
    
    AllEmojiElements[i].onclick = function(){

        let CorrespondingKeys = EmojiKeyboardData[i]
        PopupText.innerText = CorrespondingKeys

        if (window.location["href"].includes("users")){
            CommentBox = document.getElementsByName("content")[FocusingTextboxId]
        }else{
            CommentBox = document.getElementsByName("compose-comment")[FocusingTextboxId]
        }

        if (!(CommentBox==undefined)){
            Undo.push(CommentBox.value)
            CommentBox.blur()

            setTimeout(function(){
                
                let SelectionStart = CommentBox.selectionStart
                let SelectionEnd = CommentBox.selectionEnd
                let upperPart = ""
                let lowerPart = ""

                //you didn't highlight anything
                if(SelectionStart==SelectionEnd){

                    for(let character=0;character<SelectionStart;character++){
                        upperPart += CommentBox.value[character]
                    }
                    

                    for(let character=SelectionStart;character<CommentBox.value.length;character++){
                        lowerPart += CommentBox.value[character]
                    }

                }else{
                    //you've highlighted sth

                    for(let character=0;character<SelectionStart;character++){
                        upperPart += CommentBox.value[character]
                    }

                    for(let character=SelectionEnd;character<CommentBox.value.length;character++){
                        lowerPart += CommentBox.value[character]
                    }

                }

                CommentBox.value = upperPart + CorrespondingKeys + lowerPart
                
                CommentBox.dispatchEvent(new Event("input",{ bubbles: true }))
                CommentBox.focus()
                CommentBox.setSelectionRange(SelectionStart+CorrespondingKeys.length,SelectionStart+CorrespondingKeys.length)
                
            },1)
        }

        
        
        
    }
}

//search bar value updates = reformat emojis
SearchBar.addEventListener("input",function(){

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

})


//check new comment boxes

document.addEventListener("click",function(){
    scanAndCreateAddEmojiButtons()
    
})

setInterval(scanAndCreateAddEmojiButtons,6)