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
// =========================
// STEP NAVIGATION
// =========================

function nextStep(step){

    playClick();

    hideAllPages();

    document
    .getElementById("step"+step)
    .classList.add("active");

    startTyping(step);

}

function goBack(pageId){

    playClick();

    hideAllPages();

    document
    .getElementById(pageId)
    .classList.add("active");

}

// =========================
// CLICK SOUND
// =========================

const clickSound =
document.getElementById("clickSound");

function playClick(){

    clickSound.currentTime = 0;

    clickSound.play();

}

// =========================
// MUSIC ON / OFF
// =========================

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let musicPlaying = true;

function toggleMusic(){

    playClick();

    if(musicPlaying){

        music.pause();

        musicBtn.innerHTML =
        "🔊 Music ON";

    }else{

        music.play();

        musicBtn.innerHTML =
        "🔇 Music OFF";

    }

    musicPlaying = !musicPlaying;

}

// =========================
// AUTO PLAY
// =========================

window.addEventListener("load",()=>{

    music.play().catch(()=>{});

});

// =========================
// TYPING EFFECT
// =========================

const storyContent=[

`💖 আজ অনেক কিছু বলার আছে...
😔 জানি তুমি হয়তো আজ আর আমার জীবনের অংশ নও।
🌸 তবুও আজকের দিনটা শুধু তোমার...`,

`😊 এক সময় প্রতিদিন কথা হতো...
💙 আজ সেগুলো শুধু স্মৃতি...
❤️ তবুও ভুলিনি...`,

`🌧️ তুমি চলে গেছো...
🤍 ভালোবাসা জোর করে ধরে রাখা যায় না...`,

`🎂 শুভ জন্মদিন...
❤️ আল্লাহ তোমাকে সবসময় সুখে রাখুন...`,

`🌌 কিছু গল্প কখনো শেষ হয় না...
💖 ভালো থেকো...`

];
/* =========================
MUSIC BUTTON
========================= */

#musicBtn{

    width:100%;
    padding:14px;
    margin-top:12px;

    border:none;
    border-radius:14px;

    background:#ff4d6d;
    color:#fff;

    font-size:17px;
    font-weight:bold;

    cursor:pointer;

    transition:.3s;

}

#musicBtn:hover{

    transform:scale(1.05);

    box-shadow:0 0 20px #ff4d6d;

}

/* =========================
MADE BY
========================= */

.made{

    margin-top:18px;

    text-align:center;

    color:#ddd;

    font-size:15px;

}

/* =========================
RESPONSIVE
========================= */

@media(max-width:480px){

.container{

width:95%;

}

.glass-card{

padding:22px;

}

h2{

font-size:24px;

}

.story{

font-size:16px;

line-height:1.6;

}

.nextBtn,
.backBtn,
.loginBtn{

font-size:16px;

}

}

/* =========================
SCROLLBAR
========================= */

::-webkit-scrollbar{

width:6px;

}

::-webkit-scrollbar-thumb{

background:#ff5fa2;

border-radius:20px;

}

/* =========================
END
========================= */
// =========================
// TYPING EFFECT
// =========================

function typeWriter(element, text, speed = 35){

    element.innerHTML = "";

    let i = 0;

    function typing(){

        if(i < text.length){

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);

        }

    }

    typing();

}

function startTyping(step){

    const el = document.querySelector(`#step${step} .story`);

    if(!el) return;

    typeWriter(el, storyContent[step-1]);

}

// =========================
// RESTORE PAGE
// =========================

window.onload = function(){

    if(localStorage.getItem("birthdayOpen")==="true"){

        showPage("step1");

        startTyping(1);

    }else{

        showPage("loginPage");

    }

    bgMusic.play().catch(()=>{});

};

// =========================
// KEEP MUSIC PLAYING
// =========================

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        bgMusic.pause();

    }else if(musicPlaying){

        bgMusic.play().catch(()=>{});

    }

});

bgMusic.addEventListener("ended",()=>{

    bgMusic.currentTime = 0;

    if(musicPlaying){

        bgMusic.play();

    }

});

// =========================
// READY
// =========================

console.log("🎂 Birthday Website Ready ❤️");
