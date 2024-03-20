document.addEventListener('DOMContentLoaded', function() {
    // Play the background music
    const bgMusic = new Audio('audio.mp3');
    bgMusic.loop = true; // Loop the music
    bgMusic.play();


    function moveRandomEl(elm){
        elm.style.position = "absolute";
        elm.style.top = Math.floor(Math.random() * 90 + 5)+"%";
        elm.style.left = Math.floor(Math.random() * 90 + 5)+"%";
    }

    const moveRandom = document.querySelector("#move-random");

    moveRandom.addEventListener("mouseenter", function(e){
        moveRandomEl(e.target);
    });
    console.log("This code is running");
});
