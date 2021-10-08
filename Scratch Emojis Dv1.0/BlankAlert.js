//init variables
BlankButWithEmojisAdded = false

function BlankAlertMain(){

    var ReplySection = document.getElementsByClassName("flex-row comments-root-reply")[0]
    var MainComposeSection = document.getElementsByClassName("flex-row comment compose-row")[0]

    AlertBannerContainer = document.createElement("div")
    AlertBannerContainer.id = "ScratchEmojisAlertBannerContainer"
    AlertBannerContainer.classList.add("ZoomInAndOut")


    EmojiContainer.appendChild(AlertBannerContainer)

    AlertBannerText = document.createElement("h6")
    AlertBannerText.id = "ScratchEmojisAlertBannerText"
    AlertBannerText.innerText = "Press Ctrl+V to PASTE your emojis into the textbox."

    AlertBannerContainer.appendChild(AlertBannerText)

    var WordsLeftText = document.getElementsByClassName("compose-limit compose-valid")[0].getElementsByTagName("span")[0]

    var CommentInput = document.getElementById("frc-compose-comment-3392903")

    setInterval(function(){

        var WordsLeftCount = WordsLeftText.innerText.split(" ")[0]

        if (EmojiString.length>0){
            AlertBannerContainer.style.display = "block"
        }else{
            AlertBannerContainer.style.display = "none"
        }

        AlertBannerContainer.style.left = "0px"
        AlertBannerContainer.style.top = (0-30) + "px"

    },0)



}


//wait until the required element exists then main
var checkIfElementExists = setInterval(function(){
    if (!(document.getElementById("EmojiContainer")==undefined)){
        BlankAlertMain()
        clearInterval(checkIfElementExists)
    }

},0)