const egg = document.querySelector('.egg');

setTimeout(
    function () {
        egg.style.opacity = '1';
    },
    2000
);

// l'oeuf disparaît au clic
egg.addEventListener('click', function () {
    egg.style.opacity = '0';
});