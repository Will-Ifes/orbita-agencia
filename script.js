// Menu do celular: o CSS esconde o menu enquanto aria-expanded for "false"
const menuBotao = document.querySelector('.menu-botao');
const menu = document.getElementById('menu');

function abrirMenu(aberto) {
    menuBotao.setAttribute('aria-expanded', String(aberto));
}

menuBotao.addEventListener('click', () => {
    abrirMenu(menuBotao.getAttribute('aria-expanded') !== 'true');
});

// Fecha o menu ao escolher um link ou apertar Esc
menu.addEventListener('click', (evento) => {
    if (evento.target.closest('a')) abrirMenu(false);
});

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && menuBotao.getAttribute('aria-expanded') === 'true') {
        abrirMenu(false);
        menuBotao.focus();
    }
});

// Cards de serviço: o botão mostra ou esconde o texto extra
document.querySelectorAll('.card-botao').forEach((botao) => {
    const painel = document.getElementById(botao.getAttribute('aria-controls'));
    botao.addEventListener('click', () => {
        const aberto = botao.getAttribute('aria-expanded') !== 'true';
        botao.setAttribute('aria-expanded', String(aberto));
        painel.hidden = !aberto;
    });
});
