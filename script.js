/* =========================
   OPEN SURPRISE
========================= */

function openSurprise() {

    document.getElementById("intro").style.display = "none";

    document.getElementById("birthdayPage")
        .classList.remove("hidden");

    createHearts();
    createConfetti();

    startMusic();

    startTypewriter();
}


/* =========================
   MUSIC
========================= */

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

function startMusic() {

    music.play()
        .then(() => {
            musicBtn.innerHTML = "🔊";
        })
        .catch(() => {
            musicBtn.innerHTML = "🎵";
        });
}

function toggleMusic() {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🔊";

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵";
    }
}


/* =========================
   MESSAGE MODAL
========================= */

function showMessage() {

    document
        .getElementById("messageModal")
        .classList.add("show");

}

function closeMessage() {

    document
        .getElementById("messageModal")
        .classList.remove("show");

}


/* =========================
   TYPEWRITER
========================= */

const message =
"Some people enter your life and quietly make everything brighter. You are one of those people. I hope your birthday brings you endless happiness, beautiful surprises, unforgettable memories and all the love your heart deserves. Keep smiling because your smile is truly special. ❤️";

let typeIndex = 0;

function startTypewriter() {

    const element =
        document.getElementById("typewriter");

    element.innerHTML = "";

    typeIndex = 0;

    type();

}

function type() {

    const element =
        document.getElementById("typewriter");

    if (typeIndex < message.length) {

        element.innerHTML += message.charAt(typeIndex);

        typeIndex++;

        setTimeout(type, 35);

    }

}




/* =========================
   GIFT
========================= */

function openGift() {

    const giftText =
        document.getElementById("giftText");

    giftText.innerHTML =
        "🎉 Surprise! You deserve all the happiness in the world! ❤️";

        window.open("https://1drv.ms/p/c/1346301d783a2bda/IQDYa9vucPhpQKMLtwbJL6nYASyaFfMrqiXYmwmAFij5AYE?e=RM5fK4");

    createConfetti();

}


/* =========================
   CAKE
========================= */

function blowCandle() {

    const flame =
        document.getElementById("flame");

    flame.style.display = "none";

    document.getElementById("cakeMessage")
        .innerHTML =
        "✨ Wish made! May all your dreams come true. ❤️";

    createConfetti();

    fireworks();

}


/* =========================
   SECRET MESSAGE
========================= */

function showSecret() {

    document
        .getElementById("secretMessage")
        .classList.add("show-secret");

    createHearts();

}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    for (let i = 0; i < 15; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            ["❤️", "💖", "💕", "💗", "💓"]
            [Math.floor(Math.random() * 5)];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "999";

        heart.style.animation =
            `heartFloat ${4 + Math.random() * 4}s linear`;

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 8000);
    }
}


/* Add dynamic heart animation */

const heartStyle =
document.createElement("style");

heartStyle.innerHTML = `

@keyframes heartFloat {

    0% {
        transform: translateY(0) rotate(0);
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    100% {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
    }

}

`;

document.head.appendChild(heartStyle);


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        const symbols =
            ["💖", "✨", "🎉", "💕", "⭐"];

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            Math.random() * 40 + "vh";

        confetti.style.fontSize =
            (12 + Math.random() * 20) + "px";

        confetti.style.zIndex = "999";

        confetti.style.pointerEvents = "none";

        confetti.style.animation =
            `confettiFall ${2 + Math.random() * 3}s linear`;

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }
}


const confettiStyle =
document.createElement("style");

confettiStyle.innerHTML = `

@keyframes confettiFall {

    0% {
        transform:
            translateY(-100px)
            rotate(0deg);
        opacity: 1;
    }

    100% {
        transform:
            translateY(100vh)
            rotate(720deg);
        opacity: 0;
    }

}

`;

document.head.appendChild(confettiStyle);


/* =========================
   HEART CURSOR
========================= */

document.addEventListener("mousemove", function(e) {

    if (Math.random() > 0.75) {

        const heart =
            document.createElement("span");

        heart.innerHTML = "♥";

        heart.style.position = "fixed";

        heart.style.left =
            e.clientX + "px";

        heart.style.top =
            e.clientY + "px";

        heart.style.color = "#ff70b5";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9999";

        heart.style.fontSize =
            (10 + Math.random() * 10) + "px";

        heart.style.animation =
            "cursorHeart 1s ease forwards";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 1000);

    }

});


const cursorStyle =
document.createElement("style");

cursorStyle.innerHTML = `

@keyframes cursorHeart {

    0% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform:
            translateY(-40px)
            scale(1.8);
    }

}

`;

document.head.appendChild(cursorStyle);


/* =========================
   FIREWORKS
========================= */

function fireworks() {

    for (let i = 0; i < 30; i++) {

        const fire =
            document.createElement("div");

        fire.innerHTML = "✨";

        fire.style.position = "fixed";

        fire.style.left =
            "50%";

        fire.style.top =
            "50%";

        fire.style.fontSize =
            "25px";

        fire.style.zIndex = "9999";

        fire.style.pointerEvents =
            "none";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            100 + Math.random() * 250;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        fire.style.setProperty(
            "--x",
            x + "px"
        );

        fire.style.setProperty(
            "--y",
            y + "px"
        );

        fire.style.animation =
            "firework 1.5s ease-out forwards";

        document.body.appendChild(fire);

        setTimeout(() => {

            fire.remove();

        }, 1500);
    }
}


const fireStyle =
document.createElement("style");

fireStyle.innerHTML = `

@keyframes firework {

    from {
        transform:
            translate(0,0)
            scale(0);
        opacity: 1;
    }

    to {
        transform:
            translate(var(--x),var(--y))
            scale(1.5);
        opacity: 0;
    }

}

`;

document.head.appendChild(fireStyle);