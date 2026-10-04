/* =========================
   OPEN SURPRISE
========================= */

function openSurprise() {

    const intro = document.getElementById("intro");
    const birthday = document.getElementById("birthday");

    intro.style.display = "none";

    birthday.classList.add("show");

    // Start hearts
    createHearts();

    // Confetti
    createConfetti();

    // Try music
    const music = document.getElementById("birthdayMusic");

    music.play().catch(() => {
        console.log("Music needs user interaction.");
    });
}


/* =========================
   MESSAGE MODAL
========================= */

function showMessage() {

    document
        .getElementById("messageModal")
        .classList.add("show");

    createConfetti();
}


function closeMessage() {

    document
        .getElementById("messageModal")
        .classList.remove("show");
}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML =
            Math.random() > 0.5 ? "♥" : "♡";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (12 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 10000);

    }, 500);
}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const symbols = [
        "♥",
        "♡",
        "✦",
        "✧",
        "●"
    ];

    for (let i = 0; i < 60; i++) {

        const confetti =
            document.createElement("div");

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
            Math.random() * 30 + "vh";

        confetti.style.fontSize =
            (10 + Math.random() * 20) + "px";

        confetti.style.color =
            ["#ff4d88", "#ff9fbd", "#ffffff", "#d96cff"]
            [Math.floor(Math.random() * 4)];

        confetti.style.zIndex = "200";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);


        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(80vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 2500 + Math.random() * 2000,
                easing: "cubic-bezier(.2,.8,.3,1)"
            }
        );


        setTimeout(() => {

            confetti.remove();

        }, 5000);
    }
}


/* =========================
   MUSIC
========================= */

let musicPlaying = false;


function toggleMusic() {

    const music =
        document.getElementById("birthdayMusic");

    const button =
        document.getElementById("musicBtn");


    if (musicPlaying) {

        music.pause();

        button.innerHTML = "🔇";

        musicPlaying = false;

    } else {

        music.play();

        button.innerHTML = "🔊";

        musicPlaying = true;
    }
}