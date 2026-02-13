const music = document.getElementById("bgMusic");

function celebrateLove(){

let name = document.querySelector(".nameInput").value;

if(name){
localStorage.setItem("loverName", name);
}

localStorage.setItem("musicTime", music.currentTime);

window.location.href="thankyou.html";
}


/* MUSIC CONTINUE */
window.addEventListener("load", () => {

let time = localStorage.getItem("musicTime");

if(time){
music.currentTime = time;
}

music.play().catch(()=>{});
});

window.addEventListener("beforeunload", () => {
localStorage.setItem("musicTime", music.currentTime);
});

/* LOVE POPUP */
function openLetter(){
document.getElementById("lovePopup").style.display="block";
}

function closeLetter(){
document.getElementById("lovePopup").style.display="none";
}

/* YES BUTTON */
function celebrateLove(){
localStorage.setItem("musicTime", music.currentTime);
window.location.href="thankyou.html";
}

/* NO BUTTON ESCAPE */
let noBtn=document.getElementById("noButton");

if(noBtn){
noBtn.addEventListener("mouseover",()=>{
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*80+"%";
noBtn.style.top=Math.random()*80+"%";
});
}
