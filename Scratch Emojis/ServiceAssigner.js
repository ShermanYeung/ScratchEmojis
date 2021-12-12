function getFileUrl(file){
    //get URL by extension id.
    return chrome.extension.getURL(file)
}
var Scripts = []




//CUSTOMIZABLE data

var ScriptSources = [
    getFileUrl("AddEmojis.js"),
    getFileUrl("BetterEmojis.js")
]


//vars init
var ExtensionUrl = chrome.extension.getURL("")
localStorage.setItem("ScratchEmojisExtensionId",ExtensionUrl)


//push the elements into the list
for (let i=0; i<ScriptSources.length; i++){

    Scripts.push(document.createElement("script"))
    Scripts[i].src = ScriptSources[i]

    document.body.appendChild(Scripts[i])
}
