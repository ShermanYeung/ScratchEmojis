function getFileUrl(file){
    //get URL by extension id.
    return chrome.extension.getURL(file)
}
var Scripts = []




//CUSTOMIZABLE data

var ScriptSources = [
    getFileUrl("AddEmojis.js"),
    getFileUrl("BlankAlert.js")
]

//scripts that doesn't require anything to be loaded before inserting the script
var SpecialScriptSources = [getFileUrl("BetterEmojis.js")]


















//functions

function ServiceAssignerMain(){

    //vars init
    var ExtensionUrl = chrome.extension.getURL("")
    localStorage.setItem("ScratchEmojisExtensionId",ExtensionUrl)


    //push the elements into the list
    for (let i=0; i<ScriptSources.length; i++){

        Scripts.push(document.createElement("script"))
        Scripts[i].src = ScriptSources[i]

        document.body.appendChild(Scripts[i])
    }

}


function LoadSpecialScripts(){

    //push the elements into the list
    for (let i=0; i<SpecialScriptSources.length; i++){

        SpecialScript = document.createElement("script")
        SpecialScript.src = SpecialScriptSources[i]

        document.body.appendChild(SpecialScript)
    }

}




LoadSpecialScripts()
//check and wait until the required elements exist
var checkEverythingExists = setInterval(function(){

    //requirements
    if ((!(document.getElementsByClassName("compose-limit compose-valid")[0]==undefined))&&
    (!(document.getElementsByClassName("compose-limit compose-valid")[0].getElementsByTagName("span")[0]==undefined))&&
    (!(document.getElementsByClassName("flex-row compose-bottom-row")[0]==undefined))){

        ServiceAssignerMain()
        clearInterval(checkEverythingExists)
    }

},0)