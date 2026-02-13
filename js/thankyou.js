const music = document.getElementById("bgMusic");

/* Continue Music */
window.addEventListener("load", () => {

let time = localStorage.getItem("musicTime");

if(time){
music.currentTime = time;
}

music.play().catch(()=>{});

/* Show Name */
let loverName = localStorage.getItem("loverName");

if(loverName){
document.getElementById("loverName").innerText = loverName;
}

/* Start Fireworks Around Name */
createNameFireworks();

/* Heart Rain */
setInterval(createHeart,400);

});

/* Save Music Time */
window.addEventListener("beforeunload", () => {
localStorage.setItem("musicTime", music.currentTime);
});

/* Video Popup */
function openVideo(){
document.getElementById("videoPopup").style.display="block";
document.getElementById("specialVideo").play();
}

function closeVideo(){
let video=document.getElementById("specialVideo");
video.pause();
video.currentTime=0;
document.getElementById("videoPopup").style.display="none";
}

/* Floating Hearts */
function createHeart(){

let heart=document.createElement("span");
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";
heart.style.fontSize=Math.random()*20+15+"px";

document.querySelector(".heart-rain").appendChild(heart);

setTimeout(()=>heart.remove(),6000);
}

/* Name Fireworks */
function createNameFireworks(){

let name=document.getElementById("loverName");

setInterval(()=>{
name.style.textShadow =
`0 0 ${Math.random()*40}px pink`;
},300);

}
