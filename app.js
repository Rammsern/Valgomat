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
