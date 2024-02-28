let songs = [
    "./canciones/C418 - Haggstrom.mp3", 
    "./canciones/C418 - Wet Hands.mp3", 
    "./canciones/C418 - Dry Hands.mp3"
];
let currentSong = 0;
let sound = new Audio(songs[currentSong]);

sound.addEventListener('ended', function() {
    currentSong = (currentSong + 1) % songs.length;
    sound.src = songs[currentSong];
    sound.play();
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "play") {
            sound.play();
        } else if (request.action == "pause") {
            sound.pause();
        } else if (request.action == "next") {
            currentSong = (currentSong + 1) % songs.length;
            sound.src = songs[currentSong];
            sound.play();
        } else if (request.action == "prev") {
            currentSong = (currentSong - 1 + songs.length) % songs.length;
            sound.src = songs[currentSong];
            sound.play();
        }
    }
);
