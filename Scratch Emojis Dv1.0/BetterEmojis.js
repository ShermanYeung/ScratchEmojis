var AllImages = []

function getFileUrl(file){
    return localStorage.getItem("ScratchEmojisExtensionId")+file
}

function BetterEmojisMain(){

    
    AllImages = document.getElementsByTagName("img")

    for(let i=0;i<AllImages.length;i++){

        //project page
        if (AllImages[i].classList.contains("emoji")){

            switch (AllImages[i].getAttribute("alt")){
                case "meow emoji":
                    AllImages[i].src = getFileUrl("images/cat.svg")
                    break
                case "gobo emoji":
                    AllImages[i].src = getFileUrl("images/gobo.svg")
                    break
                case "waffle emoji":
                    AllImages[i].src = getFileUrl("images/waffle.svg")
                    break
                case "taco emoji":
                    AllImages[i].src = getFileUrl("images/taco.svg")
                    break
                case "sushi emoji":
                    AllImages[i].src = getFileUrl("images/sushi.svg")
                    break
                case "pizza emoji":
                    AllImages[i].src = getFileUrl("images/pizza.svg")
                    break
                case "candycorn emoji":
                    AllImages[i].src = getFileUrl("images/candycorn.svg")
                    break
                case "apple emoji":
                    AllImages[i].src = getFileUrl("images/apple.svg")
                    break
                case "cupcake emoji":
                    AllImages[i].src = getFileUrl("images/cupcake.svg")
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

        //profile page
        switch (AllImages[i].src){
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/meow.png":
                AllImages[i].src = getFileUrl("images/cat.svg")
                break
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/gobo.png":
                AllImages[i].src = getFileUrl("images/gobo.svg")
                break
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/waffle.png":
                AllImages[i].src = getFileUrl("images/waffle.svg")
                break
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/taco.png":
                AllImages[i].src = getFileUrl("images/taco.svg")
                break     
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/sushi.png":
                AllImages[i].src = getFileUrl("images/sushi.svg")
                break      
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/pizza.png":
                AllImages[i].src = getFileUrl("images/pizza.svg")
                break
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/candycorn.png":
                AllImages[i].src = getFileUrl("images/candycorn.svg")
                break 
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/apple.png":
                AllImages[i].src = getFileUrl("images/apple.svg")
                break
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/cupcake.png":
                AllImages[i].src = getFileUrl("images/cupcake.svg")
                break
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/broccoli.png":
                AllImages[i].src = getFileUrl("images/broccoli.svg")
                break
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/camera.png":
                AllImages[i].src = getFileUrl("images/camera.svg")
                break
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/compass.png":
                AllImages[i].src = getFileUrl("images/compass.svg")
                break
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/suitcase.png":
                AllImages[i].src = getFileUrl("images/suitcase.svg")
                break
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/map.png":
                AllImages[i].src = getFileUrl("images/map.svg")
                break
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/binoculars.png":
                AllImages[i].src = getFileUrl("images/binoculars.svg")
                break
            case "https://cdn.scratch.mit.edu/scratchr2/static/__fd54d8440ae146e24183f3a920f85c36__/images/easter_eggs/10mil.png":
                AllImages[i].src = getFileUrl("images/10mil.svg")
                break
        }
    }
}

var loop = setInterval(function(){
    BetterEmojisMain()
},6)
