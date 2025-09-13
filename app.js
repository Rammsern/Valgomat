const QUESTIONS = [
  {id:'q1', text:'Privat sektor bør utgjøre en større andel av økonomien.'},
  {id:'q2', text:'Norge bør slutte å lete etter nye oljefelt.'}
];

document.getElementById("startBtn").addEventListener("click", () => {
  showQuestion(0);
});

function showQuestion(index) {
  const q = QUESTIONS[index];
  const questionArea = document.getElementById("questionArea");
  questionArea.innerHTML = `<h2>${q.text}</h2>`;
}
