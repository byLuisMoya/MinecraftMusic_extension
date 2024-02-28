document.getElementById('play').addEventListener("click", function() {
    chrome.runtime.sendMessage({action: "play"});
});

document.getElementById('pause').addEventListener("click", function() {
    chrome.runtime.sendMessage({action: "pause"});
});

document.getElementById('next').addEventListener("click", function() {
    chrome.runtime.sendMessage({action: "next"});
});

document.getElementById('prev').addEventListener("click", function() {
    chrome.runtime.sendMessage({action: "prev"});
});
