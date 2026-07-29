// =========================
// ELEMENTS
// =========================

const pages = document.querySelectorAll(".page");

const countdownPage = document.getElementById("countdownPage");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const step5 = document.getElementById("step5");

const countdown = document.getElementById("countdown");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// =========================
// BIRTHDAY TIME
// =========================

// 29 July 2026 - 8:20 PM

const targetDate = new Date(
    "2026-07-29T20:20:00"
);

// =========================
// PAGE FUNCTION
// =========================

function hideAllPages(){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

}

function showPage(page){

    hideAllPages();

    page.classList.add("active");

}

// =========================
// NEXT STEP
// =========================

function nextStep(step){

    hideAllPages();

    document
    .getElementById("step"+step)
    .classList
    .add("active");

}

// =========================
// MUSIC BUTTON
// =========================

let musicPlaying = true;

function toggleMusic(){

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
// REAL COUNTDOWN
// =========================

function updateCountdown(){

    const now = new Date();

    const distance = targetDate - now;

    // Countdown finished
    if(distance <= 0){

        localStorage.setItem(
            "birthdayUnlocked",
            "true"
        );

        showPage(step1);

        clearInterval(timer);

        return;

    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    countdown.innerHTML =

        `${days}d : ${String(hours).padStart(2,"0")} : ${String(minutes).padStart(2,"0")} : ${String(seconds).padStart(2,"0")}`;

}

const timer = setInterval(
    updateCountdown,
    1000
);

updateCountdown();

// =========================
// FIRST LOAD
// =========================

window.onload = function(){

    if(
        localStorage.getItem(
            "birthdayUnlocked"
        ) === "true"
    ){

        showPage(step1);

    }else{

        showPage(countdownPage);

    }

};
// =========================
// AUTO PLAY MUSIC
// =========================

window.addEventListener("load", () => {

    music.play().catch(() => {
        console.log("Autoplay blocked by browser.");
    });

});

// =========================
// TYPING EFFECT
// =========================

function typeWriter(element,text,speed=40){

    element.innerHTML="";

    let i=0;

    function typing(){

        if(i<text.length){

            element.innerHTML+=text.charAt(i);

            i++;

            setTimeout(typing,speed);

        }

    }

    typing();

}

// =========================
// START TYPING WHEN PAGE CHANGES
// =========================

const storyTexts=document.querySelectorAll(".story");

const storyContent=[
`জানি, তুমি হয়তো আজ আর আমার জীবনের অংশ নও।

তবুও আজকের দিনটা শুধু তোমার।

তাই কিছু কথা বলতে চাই... 🌸`,

`এক সময় প্রতিদিন কথা হতো...

হাসি ছিল...

অভিমান ছিল...

আজ সেগুলো শুধু স্মৃতি।

তবুও সেই মুহূর্তগুলো আজও আমার কাছে অমূল্য। 💙`,

`তুমি চলে গেছো...

হয়তো সেটাই তোমার ভালো থাকার পথ ছিল।

আমি তোমাকে কখনো আটকাইনি...

কারণ ভালোবাসা কখনো জোর করে ধরে রাখা যায় না। 🌙`,

`শুভ জন্মদিন! 🎂🎉

আল্লাহ যেন তোমার প্রতিটি স্বপ্ন পূরণ করেন।

তুমি সবসময় ভালো থেকো।

তোমার মুখের হাসি যেন কখনো হারিয়ে না যায়।

আমি তোমার জীবনে না থাকলেও আমার দোয়া সবসময় থাকবে। ❤️`,

`কিছু মানুষ গল্প হয়ে যায়...

কিন্তু কিছু গল্প কখনো শেষ হয় না।

ভালো থেকো...

শুভ জন্মদিন। ❤️🌙`
];

function startTyping(step){

    const el=document.querySelector(`#step${step} .story`);

    if(!el) return;

    el.classList.add("typing");

    typeWriter(el,storyContent[step-1],35);

}

function nextStep(step){

    hideAllPages();

    const page=document.getElementById("step"+step);

    page.classList.add("active");

    startTyping(step);

  }
// =========================
// START TYPING AFTER COUNTDOWN
// =========================

if(localStorage.getItem("birthdayUnlocked")==="true"){

    setTimeout(()=>{

        startTyping(1);

    },300);

}

// =========================
// PREVENT MULTIPLE MUSIC
// =========================

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        music.pause();

    }else{

        if(musicPlaying){

            music.play().catch(()=>{});

        }

    }

});

// =========================
// RESTART MUSIC IF ENDED
// =========================

music.addEventListener("ended",()=>{

    music.currentTime=0;

    if(musicPlaying){

        music.play();

    }

});

// =========================
// INITIAL BUTTON STATE
// =========================

musicBtn.innerHTML="🔇 Music OFF";

// =========================
// SCRIPT READY
// =========================

console.log("Birthday Surprise Website Loaded Successfully ❤️");
