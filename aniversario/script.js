const questions = [
    { q: "Lets start easy, what was the exact first msg I sent you? (Caps included)", a: "nahh buen gusto musical y futbolera" },
    { q: "How many goals did messi score for barça all time", a: "672" },
    { q: "Random number between 1 and 100 (I want you to see all mistake images)", a: "79" },
    { q: "My fav song (feel free to ask if you dont know)", a: "free bird" },
    { q: "How I will call you in front of your family when I meet them (🍄) ", a: "cosita" }
];

let current = 0;

const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");

const questionBox = document.getElementById("question-box");
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");

const imagesContainer = document.getElementById("images-container");
const loveLetter = document.getElementById("love-letter");
const endBtn = document.getElementById("end-btn");

startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    questionBox.classList.remove("hidden");
    loadQuestion();
});

function loadQuestion() {
    questionText.textContent = questions[current].q;
    answerInput.value = "";
    feedback.textContent = "";
}

submitBtn.addEventListener("click", () => {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[current].a.toLowerCase();

    // ELIMINAR TODAS LAS IMÁGENES ANTERIORES (correctas o incorrectas)
    imagesContainer.innerHTML = "";

    if (userAnswer === correctAnswer) {
        feedback.textContent = "GOOD JOB MY LOVE";
        feedback.style.color = "green";

        // Añadir imagen correcta
        const img = document.createElement("img");
        img.src = `imagenes/imagen${current + 1}.jpg`;
        imagesContainer.appendChild(img);

        current++;

        if (current < questions.length) {
            setTimeout(loadQuestion, 800);
        } else {
            questionBox.classList.add("hidden");
            loveLetter.classList.remove("hidden");
        }

    } else {
        feedback.textContent = "MISTAKEEEE";
        feedback.style.color = "red";

        // Número aleatorio entre 1 y 5
        const randomNum = Math.floor(Math.random() * 5) + 1;

        // Crear imagen incorrecta aleatoria
        const img = document.createElement("img");
        img.src = `imagenes/incorrecto${randomNum}.jpg`;
        imagesContainer.appendChild(img);
    }
});


endBtn.addEventListener("click", () => {
    location.reload();
});
