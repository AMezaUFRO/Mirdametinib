// Obtener botones
const btn1 = document.getElementById('tab1-btn');
const btn2 = document.getElementById('tab2-btn');
const btn3 = document.getElementById('tab3-btn');
const btn4 = document.getElementById('tab4-btn');
const btn5 = document.getElementById('tab5-btn');

// Obtener secciones
const t1 = document.getElementById('tab1');
const t2 = document.getElementById('tab2');
const t3 = document.getElementById('tab3');
const t4 = document.getElementById('tab4');
const t5 = document.getElementById('tab5');

// Animación inicial
document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("fade");
});

// Función general para mostrar tabs
function showTab(tab, btn) {

  // Ocultar todas las secciones
  [t1, t2, t3, t4, t5].forEach(t => {
    t.classList.remove("show");
    t.classList.add("hidden");
  });

  // Desactivar todos los botones
  [btn1, btn2, btn3, btn4, btn5].forEach(b =>
    b.classList.remove("active")
  );

  // Mostrar la sección seleccionada
  tab.classList.remove("hidden");

  setTimeout(() => {
    tab.classList.add("show");
  }, 10);

  // Activar el botón seleccionado
  btn.classList.add("active");
}

// Eventos
btn1.addEventListener("click", () => showTab(t1, btn1));
btn2.addEventListener("click", () => showTab(t2, btn2));
btn3.addEventListener("click", () => showTab(t3, btn3));
btn4.addEventListener("click", () => showTab(t4, btn4));
btn5.addEventListener("click", () => showTab(t5, btn5));

// Mostrar tab 1 cuando carga
setTimeout(() => {
  t1.classList.add("show");
}, 100);

// Activar tab 1 al inicio
btn1.click();


const explanations = {
    q1: {
        A: "Correcto.",
        B: "Incorrecto: NF1 no actúa sobre RAF; RAF se activa después de RAS.",
        C: "Incorrecto: MEK actúa más abajo en la vía, no es inhibido por NF1.",
        D: "Incorrecto: ERK es aún más downstream; tampoco es inhibido por NF1."
    },
    q2: {
        A: "Incorrecto: Mirdametinib sí es selectivo y no es competitivo con ATP.",
        B: "Incorrecto: Es no competitivo con ATP.",
        C: "Incorrecto: Actúa sobre MEK1 y MEK2, no sólo sobre MEK1.",
        D: "Correcto."
    },
    q3: {
        A: "Incorrecto: Binimetinib y trametinib no están aprobados para NF1-PN pediátricos.",
        B: "Incorrecto: Trametinib no tiene aprobación para NF1-PN pediátricos.",
        C: "Correcto.",
        D: "Incorrecto: Sí hay fármacos aprobados (Mirdametinib y Selumetinib)."
    },
    q4: {
        A: "Incorrecto: Mirdametinib no contiene yodo y el resto de su composición no corresponde",
        B: "Correcto:.",
        C: "Incorrecto: Mirdametinib no contiene cloro y el resto de su composición no corresponde.",
        D: "Incorrecto: Mirdametinib contiene yodo, no bromo."
    },
    q5: {
        A: "Incorrecto: Mirdametinib también se indica para adultos.",
        B: "Incorrecto: Mirdametinib puede tomarse con o sin alimentos.",
        C: "Correcto.",
        D: "Incorrecto: Mirdametinib no debe tomarse específicamente con alimentos."
    },
    q6: {
        A: "Incorrecto: Mirdametinib no contiene bromo.",
        B: "Incorrecto: Mirdametinib no contiene cloro.",
        C: "Correcto.",
        D: "Incorrecto: Mirdametinib no contiene selenio."
    },
    q7: {
        A: "Incorrecto: 2020 corresponde a Selumetinib.",
        B: "Incorrecto: Mirdametinib no fue aprobado en 2021.",
        C: "Incorrecto: No ocurrió en 2024.",
        D: "Correcto."
    },
    q8: {
        A: "Incorrecto, es mayor.",
        B: "Incorrecto, es mayor.",
        C: "Correcto.",
        D: "Incorrecto, es mayor."
    },
    q9: {
        A: "Incorrecto, es mayor.",
        B: "Incorrecto, es mayor.",
        C: "Correcto.",
        D: "Incorrecto, es mayor."
    },
    q10: {
        A: "Incorrecto. Las seis hélices α conservadas (αD-αI) son una característica estructural del lóbulo grande de MEK1/2, no del lóbulo pequeño.",
        B: "Correcto.",
        C: "Incorrecto. El lóbulo pequeño contiene una lámina β antiparalela conservada de cinco hebras, y las seis hélices α no pertenecen a este.",
        D: "Incorrecto. Las estructuras claves del lóbulo pequeño incluyen la lámina β antiparalela, la hélice αC y el Bucle P"
    }
};

document.getElementById("submitQuiz").addEventListener("click", function () {

    const correctAnswers = {
        q1: "A",
        q2: "D",
        q3: "C",
        q4: "B",
        q5: "C",
        q6: "C",
        q7: "D",
        q8: "C",
        q9: "C",
        q10: "B"
    };

    let score = 0;

   
    document.querySelectorAll(".explanation").forEach(e => e.remove());

    Object.keys(correctAnswers).forEach(q => {
        const questionDiv = document.querySelector(`input[name="${q}"]`).closest(".question");
        const selected = document.querySelector(`input[name="${q}"]:checked`);

        if (!selected) return;

        const userAnswer = selected.value;

        if (userAnswer === correctAnswers[q]) {
            score++;
            questionDiv.classList.add("correct");
            questionDiv.classList.remove("incorrect");
        } else {
            questionDiv.classList.add("incorrect");
            questionDiv.classList.remove("correct");
        }
// Marcar en verde la respuesta correcta cuando el usuario se equivoca
if (userAnswer !== correctAnswers[q]) {
    const correctOption = document.querySelector(
        `input[name="${q}"][value="${correctAnswers[q]}"]`
    );

    if (correctOption) {
        const correctLabel = correctOption.closest("label");
        correctLabel.style.color = "green";
        correctLabel.style.fontWeight = "bold";
    }
}

        
        const explanationText = document.createElement("p");
        explanationText.classList.add("explanation");
        explanationText.style.marginTop = "8px";
        explanationText.style.fontWeight = "bold";
        explanationText.innerHTML =
            explanations[q][userAnswer];

        questionDiv.appendChild(explanationText);
    });

// Selección del GIF según puntaje
let scoreGif = "";

if (score === 10) {
    scoreGif = "Images/perfección.gif";
} else if (score >= 8) {
    scoreGif = "Images/happy.gif";
} else if (score >= 6) {
    scoreGif = "Images/cat-you-got-this.gif";
} else if (score >= 4) {
    scoreGif = "Images/bebetter.gif";
} else {
    scoreGif = "Images/como.gif";
}

document.getElementById("quizResult").classList.remove("hidden");
document.getElementById("quizResult").innerHTML = `
    <h3>Tu puntaje: ${score}/10</h3>
    <img src="${scoreGif}" alt="gif puntaje" style="margin-top:10px; max-width:200px;">
`;
});




window.addEventListener("scroll", function () {
  const btn = document.getElementById("btn-top");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});


document.getElementById("btn-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


