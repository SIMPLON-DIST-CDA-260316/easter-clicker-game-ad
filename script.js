const egg = document.querySelector('.egg');
const tabImages = [];
const clic = document.querySelector('.clic');
const timer = document.querySelector('#timer')

setTimeout(
    function displayEgg() {
        egg.style.display = 'block';
    },
    1000
);

// l'oeuf disparaît au clic
egg.addEventListener('click', function () {
    egg.style.display = 'none';
});

// Compteur de clic
egg.addEventListener("click", (event) => {
    clic.textContent = `Nombre de clics : ${event.detail}`;
});

// Chrono
const departMinutes = 2;
let time = departMinutes * 60;

const timerElement = document.getElementById("timer");

setInterval(() => {
  let minutes = parseInt(time / 60, 10);
  let secondes = parseInt(time % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  timerElement.innerText = `Compte à rebours : ${minutes}:${secondes}`;
  time = time <= 0 ? 0 : time - 1;
}, 1000);