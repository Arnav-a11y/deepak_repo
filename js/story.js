/* MUSIC */
function toggleMusic(){
let music=document.getElementById("bgMusic");
music.muted=false;
music.play();
}
const music = document.getElementById("bgMusic");

/* Resume music from previous page */
window.addEventListener("load", () => {

let time = localStorage.getItem("musicTime");

if(time){
music.currentTime = time;
}

music.volume = 0.8;
music.play().catch(() => {});

});

/* Save music time before leaving page */
window.addEventListener("beforeunload", () => {
localStorage.setItem("musicTime", music.currentTime);
});

function goBack(){
window.location.href="story.html";
}
