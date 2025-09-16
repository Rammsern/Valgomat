let currentIndex = 0;
function showQuestion(index) {
    const q = QUESTIONS[index];
    questionArea.innerHTML = `
    <><h2>${q.cat}</h2><p>${q.text}</p></>
    <div class="options">
    <button class="option" data-value="0">Helt uenig</button>
    <button class="option" data-value="0">litt uenig</button>
    <button class="option" data-value="0">nøytral</button>
    <button class="option" data-value="5">litt enig</button>
    <button class="option" data-value="10">Helt enig</button>
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
    if(e.target.classList.contains("option")){
        const value = parseInt(e.target.dataset.value);
        const qid = QUESTIONS[currentIndex].id;
        answers[qid] = value;
        console.log("svar lagret:", answers);
        document.querySelectorAll(".option").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
    }
});
