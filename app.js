const QUESTIONS = [
{id: 'q1', cat:'økonomi', text:'privat sektor bør utjøre en større andel av økonomien.'},
{id: 'q2', cat:'klima', text:'Norge bør slutte å lete etter nye oljefelt.'},
{id: 'q3', cat:'velferd', text:'velferdsordningene bør bevares på dagens nivå.'},
];
console.log("spørsmål lastet:", questions);

const startBtn = document.getElementById("startBtn");
const questionArea = document.getElementById("questionArea");

startBtn.addEventListener("click", () => {
    showQuestion(0);
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
    <button id="nextBtn">neste</button>
    `;
doucument.getElementById("nextBtn").addEventListener("click", () => {
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
    }
});

