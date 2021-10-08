/* 
Scratch Emojis Dv1.0.

Credits:
https://www.freevector.com/
https://www.vecteezy.com/
*/

function getFileUrl(file){
    //get URL by extension id.
    return chrome.extension.getURL(file)
}



//CUSTOMIZABLE data

var ScriptSources = [
    getFileUrl("AddEmojis.js"),
    getFileUrl("BetterEmojis.js"),
    getFileUrl("BlankAlert.js")
]



















//functions

function ServiceAssignerMain(){

    //vars init
    var ExtensionUrl = chrome.extension.getURL("")
    localStorage.setItem("ScratchEmojisExtensionId",ExtensionUrl)


    var Scripts = []

    //push the elements into the list
    for (let i=0; i<ScriptSources.length; i++){

        Scripts.push(document.createElement("script"))
        Scripts[i].src = ScriptSources[i]

        document.body.appendChild(Scripts[i])
    }

}




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