/* configurar botão abrir uol */
const uolButton = document.getElementById('abrir-uol');

uolButton.addEventListener('click', function() {
    window.open('http://uol.com.br', '_blank');
});
/* formatar botão abrir uol gerando um efeito de hover */
uolButton.addEventListener('mouseover', function() {
    uolButton.style.backgroundColor = '#f0f0f0';
});
uolButton.addEventListener('mouseout', function() {
    uolButton.style.backgroundColor = '#ccc';
});
