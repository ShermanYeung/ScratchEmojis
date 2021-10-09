/*<link rel="stylesheet" href="Stylesheets/PopupStyle.css"></link>*/

function getFileUrl(file){
    return chrome.extension.getURL(file)
}


Stylesheet = document.createElement("link")
Stylesheet.rel = "stylesheet"
Stylesheet.href = getFileUrl("Stylesheets/PopupStyle.css")
document.body.appendChild(Stylesheet)






HelpImage = document.getElementById("HelpImg")
HelpImage.src = getFileUrl("images/help.svg")

GithubImage = document.getElementById("GithubImg")
GithubImage.src = getFileUrl("images/github.svg")

document.body.style.backgroundImage = "url('"+getFileUrl("images/background.svg")+"')"

HelpButton = document.getElementById("help")
HelpButton.onclick = function(){
    chrome.tabs.create({url:"Popups/help.txt"})
}

GithubButton = document.getElementById("github")
GithubButton.onclick = function(){
    chrome.tabs.create({url:"https://github.com/ShermanYeung/ScratchEmojis"})
}