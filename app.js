const QUESTIONS = [
  { id: 'q1', cat: 'innvandring', text: 'Norge bør ha en strengere innvandringspolitikk og ta imot færre flyktninger.' },
  { id: 'q2', cat: 'skatter', text: 'Skattene og avgiftene bør reduseres, særlig bilrelaterte avgifter som bompenger.' },
  { id: 'q3', cat: 'olje', text: 'Norge bør satse videre på olje- og gassnæringen og lete etter nye oljefelt.' },
];

let currentIndex = 0;
let answers = {};

const startBtn = document.getElementById("startBtn");
const questionArea = document.getElementById("questionArea");

if (!startBtn || !questionArea) {
  console.error("Fant ikke startBtn eller questionArea i DOM.");
} else {
  startBtn.addEventListener("click", () => {
    currentIndex = 0;
    showQuestion(currentIndex);
  });
}

function showQuestion(index) {
  const q = QUESTIONS[index];
  questionArea.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.textContent = q.cat;
  const p = document.createElement("p");
  p.textContent = q.text;
  questionArea.appendChild(h2);
  questionArea.appendChild(p);

  const nextBtn = document.createElement("button");
  nextBtn.textContent = index < QUESTIONS.length - 1 ? "Neste" : "Se resultat";
  nextBtn.disabled = answers[q.id] === undefined;
  nextBtn.style.marginTop = "12px";

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < QUESTIONS.length) {
      showQuestion(currentIndex);
    } else {
      showResult();
    }
  });

  const ul = document.createElement("ul");
  ul.style.listStyle = "none";
  ul.style.padding = "0";

  const options = [
    { label: "Helt uenig", value: 0 },
    { label: "Litt uenig",  value: 2 },
    { label: "Nøytral",     value: 5 },
    { label: "Litt enig",   value: 7 },
    { label: "Helt enig",   value: 10 }
  ];

  options.forEach(opt => {
    const li = document.createElement("li");
    li.textContent = opt.label;
    li.dataset.value = opt.value;
    li.style.color = "white";
    li.style.cursor = "pointer";
    li.style.padding = "8px 0";

    
    if (answers[q.id] !== undefined && answers[q.id] === opt.value) {
      li.style.color = "yellow";
    }

    li.addEventListener("click", () => {
      answers[q.id] = opt.value;
      console.log("svar lagret:", answers);

      ul.querySelectorAll("li").forEach(el => {
        el.style.color = "white";
      });
      li.style.color = "yellow";
      li.style.transform = "scale(1.2)";
      setTimeout(() => (li.style.transform = "scale(1)"), 200);
      nextBtn.disabled = false;
    });

    ul.appendChild(li);
  });

  questionArea.appendChild(ul);
  questionArea.appendChild(nextBtn);
}

function showResult() {
  let sum = 0;
  let count = 0;

  QUESTIONS.forEach(q => {
    if (answers[q.id] !== undefined) {
      sum += answers[q.id];
      count++;
    }
  });

  const avgPercent = count > 0 ? (sum / count) * 10 : 0;
  questionArea.innerHTML = `
    <h2>Resultat</h2>
    <p>Gjennomsnittlig enighet: ${avgPercent.toFixed(1)}%</p>
  `;
}


