const QUESTIONS = [
{id: 'q1', cat:'økonomi', text:'privat sektor bør utjøre en større andel av økonomien.'},
{id: 'q2', cat:'klima', text:'Norge bør slutte å lete etter nye oljefelt.'},
{id: 'q3', cat:'velferd', text:'velferdsordningene bør bevares på dagens nivå.'},
];
console.log("spørsmål lastet:", QUESTIONS);

const startBtn = document.getElementById("startBtn");
const questionArea = document.getElementById("questionArea");

startBtn.addEventListener("click", () => {
    currentIndex = 0;
    console.log("hei")
    showQuestion(currentIndex);
});
function showQuestion(index){
    const q = QUESTIONS[index];
    questionArea.innerHTML = `
    <><h2>${q.cat}</h2><p>${q.text}</p></>
    `;
}
let currentIndex = 0;
function showQuestion(index) {
    const q = QUESTIONS[index];
    questionArea.innerHTML = `
    <><h2>${q.cat}</h2><p>${q.text}</p></>
    <div class="options">
    <button class="option" data-value="-2">Helt uenig</button>
    <button class="option" data-value="-1">litt uenig</button>
    <button class="option" data-value="0">nøytral</button>
    <button class="option" data-value="1">litt enig</button>
    <button class="option" data-value="2">Helt enig</button>
    </div>
    <button id="nextBtn">${index < QUESTIONS.length-1 ? "neste" : "se resultat"}</button>
    `;
document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex++;
    if(currentIndex < QUESTIONS.length){
        showQuestion(currentIndex);
    } else {
        showResult();
    }
});
}
questionArea.addEventListener("click", (e) => {
    if(e.target.classlist.contains("option")){
        const value = parseInt(e.target.dataset.value);
        const qid = QUESTIONS[currentIndex].id;
        answers[qid] = value;
        console.log("svar lagret:", answers);
        document.querySelectorAll(".option").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
    }
});

function showResult() {
    let sum = 0;
    let count = 0;

    QUESTIONS.forEach(q => {
        if(answers[q.id] !== undefined) {
            sum += answers[q.id];
            count++;
        }
    });
const avg = count > 0 ? (sum / count) : 0;
questionArea.innerHTML = `
<h2>Resultat</h2>
<p>gjennomsnittlig enighet: ${avg.toFixed(2)}</p>
`;
}

