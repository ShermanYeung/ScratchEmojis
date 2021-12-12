var ExtensionPath = localStorage.getItem("ScratchEmojisExtensionId")

function getFileUrl(file){
    return ExtensionPath+file
}

function BetterEmojisMain(){

    
    AllImages = document.getElementsByTagName("img")

    for(let i=0;i<AllImages.length;i++){
        if (!AllImages[i].classList.contains("ScratchEmojisImage")){

            oldImgSrc = AllImages[i].src

            if (AllImages[i].src.includes("/meow.png")){
                AllImages[i].src = getFileUrl("images/cat.svg")
            }
            if (AllImages[i].src.includes("/gobo.png")){
                AllImages[i].src = getFileUrl("images/gobo.svg")
            }
            if (AllImages[i].src.includes("/waffle.png")){
                AllImages[i].src = getFileUrl("images/waffle.svg")
            }
            if (AllImages[i].src.includes("/taco.png")){
                AllImages[i].src = getFileUrl("images/taco.svg")
            }
            if (AllImages[i].src.includes("/sushi.png")){
                AllImages[i].src = getFileUrl("images/sushi.svg")
            }
            if (AllImages[i].src.includes("/pizza.png")){
                AllImages[i].src = getFileUrl("images/pizza.svg")
            }
            if (AllImages[i].src.includes("/candycorn.png")){
                AllImages[i].src = getFileUrl("images/candycorn.svg")
            }
            if (AllImages[i].src.includes("/apple.png")){
                AllImages[i].src = getFileUrl("images/apple.svg")
            }
            if (AllImages[i].src.includes("/cupcake.png")){
                AllImages[i].src = getFileUrl("images/cupcake.svg")
            }
            if (AllImages[i].src.includes("/broccoli.png")){
                AllImages[i].src = getFileUrl("images/broccoli.svg")
            }
            if (AllImages[i].src.includes("/camera.png")){
                AllImages[i].src = getFileUrl("images/camera.svg")
            }
            if (AllImages[i].src.includes("/compass.png")){
                AllImages[i].src = getFileUrl("images/compass.svg")
            }
            if (AllImages[i].src.includes("/suitcase.png")){
                AllImages[i].src = getFileUrl("images/suitcase.svg")
            }
            if (AllImages[i].src.includes("/map.png")){
                AllImages[i].src = getFileUrl("images/map.svg")
            }
            if (AllImages[i].src.includes("/binoculars.png")){
                AllImages[i].src = getFileUrl("images/binoculars.svg")
            }
            if (AllImages[i].src.includes("/10mil.png")){
                AllImages[i].src = getFileUrl("images/10mil.svg")
            }

            if (AllImages[i].src.includes("/cat.png")){
                AllImages[i].src = getFileUrl("images/cat.png")
            }
            if (AllImages[i].src.includes("/aww-cat.png")){
                AllImages[i].src = getFileUrl("images/aww-cat.png")
            }
            if (AllImages[i].src.includes("/cool-cat.png")){
                AllImages[i].src = getFileUrl("images/cool-cat.png")
            }
            if (AllImages[i].src.includes("/tongue-out-cat.png")){
                AllImages[i].src = getFileUrl("images/tongue-out-cat.png")
            }
            if (AllImages[i].src.includes("/wink-cat.png")){
                AllImages[i].src = getFileUrl("images/wink-cat.png")
            }
            if (AllImages[i].src.includes("/lol-cat.png")){
                AllImages[i].src = getFileUrl("images/lol-cat.png")
            }
            if (AllImages[i].src.includes("/upside-down-cat.png")){
                AllImages[i].src = getFileUrl("images/upside-down-cat.png")
            }
            if (AllImages[i].src.includes("/fav-it-cat.png")){
                AllImages[i].src = getFileUrl("images/fav-it-cat.png")
            }
            if (AllImages[i].src.includes("/pizza-cat.png")){
                AllImages[i].src = getFileUrl("images/pizza-cat.png")
            }
            if (AllImages[i].src.includes("/love-it-cat.png")){
                AllImages[i].src = getFileUrl("images/love-it-cat.png")
            }
            if (AllImages[i].src.includes("/rainbow-cat.png")){
                AllImages[i].src = getFileUrl("images/rainbow-cat.png")
            }
            if (AllImages[i].src.includes("/huh-cat.png")){
                AllImages[i].src = getFileUrl("images/huh-cat.png")
            }
            if (AllImages[i].src.includes("/pride.png")){
                AllImages[i].src = getFileUrl("images/pride.svg")
            }
            if (AllImages[i].src.includes("/blm.png")){
                AllImages[i].src = getFileUrl("images/blm.svg")
            }


            if((AllImages[i].src.includes(getFileUrl("")))&&!(oldImgSrc==AllImages[i].src)){
                AllImages[i].classList.add("ScratchEmojisImage")
            }


            if (EmojiImgSources.includes(AllImages[i].src)){
                AllImages[i].title = "keywords: " + EmojiDescriptions[EmojiImgSources.indexOf(AllImages[i].src)]
                AllImages[i].alt = EmojiKeyboardData[EmojiImgSources.indexOf(AllImages[i].src)]
            }
        }
        
   
   }
    
}

var loop = setInterval(function(){
    if(!(window.location["href"].includes("/editor"))){
        BetterEmojisMain()
    }
},200)
