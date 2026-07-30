// =========================
// ELEMENTS
// =========================

const categoryPages =
document.querySelectorAll(".categoryPage");

const categoryBtns =
document.querySelectorAll(".catBtn");

const searchBox =
document.getElementById("searchBox");

const clickSound =
document.getElementById("clickSound");

const bgMusic =
document.getElementById("bgMusic");

// =========================
// AUTO MUSIC
// =========================

window.addEventListener("load",()=>{

    bgMusic.play().catch(()=>{});

    loadPrices();

});

// =========================
// CATEGORY CHANGE
// =========================

function showCategory(id){

    playClick();

    categoryPages.forEach(page=>{

        page.classList.remove("active");

    });

    categoryBtns.forEach(btn=>{

        btn.classList.remove("active");

    });

    document
    .getElementById(id)
    .classList
    .add("active");

    event.target.classList.add("active");

}

// =========================
// CLICK SOUND
// =========================

function playClick(){

    clickSound.currentTime = 0;

    clickSound.play();

}

// =========================
// SAVE PRICE
// =========================

function savePrice(button){

    playClick();

    const input =
    button.previousElementSibling;

    const card =
    button.parentElement;

    const name =
    card.querySelector("h3").innerText;

    localStorage.setItem(
        name,
        input.value
    );

    button.innerHTML = "✅ Saved";

    setTimeout(()=>{

        button.innerHTML = "💾 Save";

    },1200);

}
// =========================
// LOAD SAVED PRICES
// =========================

function loadPrices(){

    document.querySelectorAll(".card").forEach(card=>{

        const title =
        card.querySelector("h3").innerText;

        const input =
        card.querySelector("input");

        const saved =
        localStorage.getItem(title);

        if(saved){

            input.value = saved;

        }

    });

}

// =========================
// SEARCH
// =========================

searchBox.addEventListener("keyup",()=>{

    const value =
    searchBox.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card=>{

        const text =
        card.innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});

// =========================
// ENTER KEY SAVE
// =========================

document.querySelectorAll(".card input")
.forEach(input=>{

    input.addEventListener("keypress",(e)=>{

        if(e.key==="Enter"){

            input.nextElementSibling.click();

        }

    });

});
// =========================
// KEEP MUSIC PLAYING
// =========================

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        bgMusic.pause();

    }else{

        bgMusic.play().catch(()=>{});

    }

});

bgMusic.addEventListener("ended",()=>{

    bgMusic.currentTime = 0;

    bgMusic.play();

});

// =========================
// AUTO SAVE
// =========================

document.querySelectorAll(".card input")
.forEach(input=>{

    input.addEventListener("input",()=>{

        const card =
        input.parentElement;

        const title =
        card.querySelector("h3").innerText;

        localStorage.setItem(
            title,
            input.value
        );

    });

});

// =========================
// CLEAR SEARCH
// =========================

searchBox.addEventListener("search",()=>{

    document.querySelectorAll(".card")
    .forEach(card=>{

        card.style.display="block";

    });

});

// =========================
// START
// =========================

loadPrices();

console.log("💎 Diamond Price Book Ready");
// =========================
// RESET ALL PRICES
// =========================

function resetPrices(){

    if(confirm("সব Saved Price মুছে ফেলতে চান?")){

        localStorage.clear();

        location.reload();

    }

}

// =========================
// EXPORT PRICES
// =========================

function exportPrices(){

    const data = {};

    document.querySelectorAll(".card").forEach(card=>{

        const title = card.querySelector("h3").innerText;

        const value = card.querySelector("input").value;

        data[title] = value;

    });

    const blob = new Blob(
        [JSON.stringify(data,null,2)],
        {type:"application/json"}
    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "Diamond_Prices.json";

    link.click();

}

// =========================
// BUTTON ANIMATION
// =========================

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.classList.add("clicked");

        setTimeout(()=>{

            btn.classList.remove("clicked");

        },200);

    });

});

// =========================
// READY
// =========================

console.log("💎 Diamond Price Book Loaded Successfully!");

bgMusic.volume = 0.5;
