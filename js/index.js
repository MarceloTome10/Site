// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Função para verificar a visibilidade dos elementos e adicionar classe de animação
function checkVisibility() {
    var elementos = document.querySelectorAll('.topico');

    elementos.forEach(function(elemento) {
        if (isElementInViewport(elemento)) {
            elemento.classList.add('animate');
        }
    });
}

// Evento de scroll para verificar a visibilidade dos elementos
window.addEventListener('scroll', function() {
    checkVisibility();
});

// Verifica a visibilidade dos elementos ao carregar a página
window.addEventListener('load', function() {
    checkVisibility();
});
