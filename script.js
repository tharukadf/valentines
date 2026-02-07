// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const secretBtn = document.getElementById("secret-btn");

// Open Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// "No" Button Runaway Logic
function moveButton() {
    const distance = window.innerWidth < 600 ? 80 : 130;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.2s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

// "Yes" Button Click Logic
yesBtn.addEventListener("click", () => {
    // 1. Update Title
    title.textContent = "Yippeeee!";
    
    // 2. Change Cat to Dancing
    catImg.src = "cat_dance.gif";
    
    // 3. Hide Yes/No Buttons
    buttons.style.display = "none";
    
    // 4. Show Secret Button & Final Text
    secretBtn.style.display = "block";
    finalText.style.display = "block";
});