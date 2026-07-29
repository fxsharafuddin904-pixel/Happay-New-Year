// =========================
// ELEMENTS
// =========================

const pages = document.querySelectorAll(".page");

const loginPage = document.getElementById("loginPage");
const countdownPage = document.getElementById("countdownPage");

const countdown = document.getElementById("countdown");

const bgMusic = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");

const keyInput = document.getElementById("keyInput");

// =========================
// TARGET TIME
// =========================

// আজ রাত 9:30

const targetDate = new Date("2026-07-29T21:30:00");

// =========================
// PAGE FUNCTIONS
// =========================

function hideAllPages(){

    pages.forEach(page=>page.classList.remove("active"));

}

function showPage(id){

    hideAllPages();

    document.getElementById(id).classList.add("active");

}

// =========================
// AUTO FILL KEY
// =========================

function autoFillKey(){

    keyInput.value = "112233";

}

// =========================
// LOGIN
// =========================

function loginSite(){

    clickSound.currentTime = 0;
    clickSound.play();

    bgMusic.play().catch(()=>{});

    showPage("countdownPage");

}
// =========================
// COUNTDOWN
// =========================

const timer = setInterval(updateCountdown,1000);

updateCountdown();

function updateCountdown(){

    const now = new Date();

    const distance = targetDate - now;

    if(distance <= 0){

        clearInterval(timer);

        localStorage.setItem("birthdayOpen","true");

        showPage("step1");

        return;

    }

    const h = Math.floor(distance/(1000*60*60));
    const m = Math.floor((distance%(1000*60*60))/(1000*60));
    const s = Math.floor((distance%(1000*60))/1000);

    countdown.innerHTML =
    `${String(h).padStart(2,"0")} :
     ${String(m).padStart(2,"0")} :
     ${String(s).padStart(2,"0")}`;

}

// =========================
// NEXT PAGE
// =========================

function nextStep(step){

    clickSound.currentTime = 0;

    clickSound.play();

    showPage("step"+step);

}

// =========================
// BACK PAGE
// =========================

function goBack(page){

    clickSound.currentTime = 0;

    clickSound.play();

    showPage(page);

}

// =========================
// FIRST LOAD
// =========================

window.onload = ()=>{

    if(localStorage.getItem("birthdayOpen")==="true"){

        showPage("step1");

    }else{

        showPage("loginPage");

    }

};
// =========================
// NEXT / BACK
// =========================

function nextStep(step){

    clickSound.currentTime = 0;
    clickSound.play();

    showPage("step" + step);

}

function goBack(page){

    clickSound.currentTime = 0;
    clickSound.play();

    showPage(page);

}

// =========================
// MUSIC TOGGLE
// =========================

let musicOn = true;

function toggleMusic(){

    clickSound.currentTime = 0;
    clickSound.play();

    const btn = document.getElementById("musicBtn");

    if(musicOn){

        bgMusic.pause();
        btn.innerHTML = "🔊 Music ON";

    }else{

        bgMusic.play().catch(()=>{});
        btn.innerHTML = "🔇 Music OFF";

    }

    musicOn = !musicOn;

}

// =========================
// AUTO START MUSIC
// =========================

window.addEventListener("load",()=>{

    bgMusic.play().catch(()=>{});

});

// =========================
// PREVENT STOP
// =========================

bgMusic.addEventListener("ended",()=>{

    bgMusic.currentTime = 0;
    bgMusic.play();

});

// =========================
// READY
// =========================

console.log("Birthday Website Loaded ❤️");
