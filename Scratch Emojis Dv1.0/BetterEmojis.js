var AllImages = []

function getFileUrl(file){
    return localStorage.getItem("ScratchEmojisExtensionId")+file
}

function BetterEmojisMain(){

    
    AllImages = document.getElementsByTagName("img")

    for(let i=0;i<AllImages.length;i++){

        if (AllImages[i].classList.contains("emoji")){

            switch (AllImages[i].getAttribute("alt")){
                case "meow emoji":
                    AllImages[i].src = getFileUrl("images/cat.png")
                    break
                case "gobo emoji":
                    AllImages[i].src = getFileUrl("images/gobo.png")
                    break
                case "waffle emoji":
                    AllImages[i].src = getFileUrl("images/waffle.png")
                    break
                case "taco emoji":
                    AllImages[i].src = getFileUrl("images/taco.png")
                    break
                case "sushi emoji":
                    AllImages[i].src = getFileUrl("images/sushi.png")
                    break
                case "pizza emoji":
                    AllImages[i].src = getFileUrl("images/pizza.png")
                    break
                case "candycorn emoji":
                    AllImages[i].src = getFileUrl("images/candycorn.png")
                    break
                case "apple emoji":
                    AllImages[i].src = getFileUrl("images/apple.png")
                    break
                case "broccoli emoji":
                    AllImages[i].src = getFileUrl("images/broccoli.svg")
                    break 
                case "camera emoji":
                    AllImages[i].src = getFileUrl("images/camera.svg")
                    break 
                case "compass emoji":
                    AllImages[i].src = getFileUrl("images/compass.svg")
                    break 
                case "suitcase emoji":
                    AllImages[i].src = getFileUrl("images/suitcase.svg")
                    break 
                case "map emoji":
                    AllImages[i].src = getFileUrl("images/map.svg")
                    break 
                case "10mil emoji":
                    AllImages[i].src = getFileUrl("images/10mil.svg")
                    break 
                case "binoculars emoji":
                    AllImages[i].src = getFileUrl("images/binoculars.svg")
                    break 
            }
        }
    }
}

var loop = setInterval(function(){
    BetterEmojisMain()
},0)
