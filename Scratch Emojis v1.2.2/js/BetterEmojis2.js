//init variables
let BodyObserver1 = new MutationObserver(scanForNewEmojis)
BodyObserver1.observe(document.body,
    {childList:true,subtree:true}
)

function scanForNewEmojis(){
    let EmojisImages = document.querySelectorAll(".emoji,.easter-egg")

    EmojisImages.forEach((img)=>{
        if(!(img.dataset.SEisRead)){
            // if it is not read...
            setNewImgSrc(img)
            img.dataset.SEisRead = true
        }
    })
}

function setNewImgSrc(img){
    let imgSrc = img.src
    //scratch 3||2 pages
    if (imgSrc.includes("images/emoji/meow.png")||imgSrc.includes("images/easter_eggs/meow.png")){img.src = getFileUrl("images/meow.svg")}
    if (imgSrc.includes("images/emoji/gobo.png")||imgSrc.includes("images/easter_eggs/gobo.png")){img.src = getFileUrl("images/gobo.svg")}
    if (imgSrc.includes("images/emoji/waffle.png")||imgSrc.includes("images/easter_eggs/waffle.png")){img.src = getFileUrl("images/waffle.svg")}
    if (imgSrc.includes("images/emoji/taco.png")||imgSrc.includes("images/easter_eggs/taco.png")){img.src = getFileUrl("images/taco.svg")}
    if (imgSrc.includes("images/emoji/sushi.png")||imgSrc.includes("images/easter_eggs/sushi.png")){img.src = getFileUrl("images/sushi.svg")}
    if (imgSrc.includes("images/emoji/pizza.png")||imgSrc.includes("images/easter_eggs/pizza.png")){img.src = getFileUrl("images/pizza.svg")}
    if (imgSrc.includes("images/emoji/candycorn.png")||imgSrc.includes("images/easter_eggs/candycorn.png")){img.src = getFileUrl("images/candycorn.svg")}
    if (imgSrc.includes("images/emoji/apple.png")||imgSrc.includes("images/easter_eggs/apple.png")){img.src = getFileUrl("images/apple.svg")}
    if (imgSrc.includes("images/emoji/cupcake.png")||imgSrc.includes("images/easter_eggs/cupcake.png")){img.src = getFileUrl("images/cupcake.svg")}
    if (imgSrc.includes("images/emoji/broccoli.png")||imgSrc.includes("images/easter_eggs/broccoli.png")){img.src = getFileUrl("images/broccoli.svg")}
    if (imgSrc.includes("images/emoji/camera.png")||imgSrc.includes("images/easter_eggs/camera.png")){img.src = getFileUrl("images/camera.svg")}
    if (imgSrc.includes("images/emoji/compass.png")||imgSrc.includes("images/easter_eggs/compass.png")){img.src = getFileUrl("images/compass.svg")}
    if (imgSrc.includes("images/emoji/suitcase.png")||imgSrc.includes("images/easter_eggs/suitcase.png")){img.src = getFileUrl("images/suitcase.svg")}
    if (imgSrc.includes("images/emoji/map.png")||imgSrc.includes("images/easter_eggs/map.png")){img.src = getFileUrl("images/map.svg")}
    if (imgSrc.includes("images/emoji/binoculars.png")||imgSrc.includes("images/easter_eggs/binoculars.png")){img.src = getFileUrl("images/binoculars.svg")}
    if (imgSrc.includes("images/emoji/10mil.png")||imgSrc.includes("images/easter_eggs/10mil.png")){img.src = getFileUrl("images/10mil.svg")}
}