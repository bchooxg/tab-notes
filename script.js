
function setTitle(content) {
    var lines = content.split('n');

    for (i = 0; i < lines.length; i++) {
        if (lines[i].trim().length > 0) {
            document.title = lines[i];
            return 0;
        }
    }

    document.title = "Notepad";
}

// To fix later

function setLineNumber(content) {
    var lineNumber = content.substr(0, document.getElementById('text').prop('selectionStart')).split("n").length;
    document.getElementById('lineNumber').innerHTML = lineNumber;
}

function setContent(content){
    chrome.storage.local.set({"content": content}, function() {
      });      
}

function getContent(){
    chrome.storage.local.get(['content'], function(result) {
        // console.log('Value currently is ' + result.key);
        console.log(result.content)
        document.getElementById('text').value = result.content;
    });
}

document.addEventListener('DOMContentLoaded', async () => {

    getContent()

    document.getElementById('text').addEventListener('keyup', function() {
        var content = document.getElementById("text").value;
        setContent(content)
        setTitle(content);
        // setLineNumber(content);
    });

    document.getElementById('text').addEventListener('focus click', function() {
        var content = document.getElementById("text").value;
        // setLineNumber(content);
    })
})