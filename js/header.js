const itensMenu = [
    { nome: 'Eventos', url: 'eventos.js' },
    { nome: 'Atendimentos', url: 'atendimentos.js' },
    { nome: 'Doações', url: 'doacao.js' }
];

function criarMenu() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    document.body.appendChild(header);
    header.appendChild(nav);
    nav.appendChild(ul);

    header.style.backgroundColor = '#00435D';
    header.style.fontFamily = 'Arial';

    ul.style.height = '40px';
    ul.style.display = 'flex';
    ul.style.justifyContent = 'center';
    ul.style.alignItems = 'center';
    ul.style.gap = '20px';
    ul.style.listStyleType = 'none';
};

function adicionarItensAoMenu() {
    const ul = document.querySelector('ul');
    itensMenu.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');

        link.textContent = item.nome.toUpperCase();
        link.href = item.url;
        link.style.textDecoration = 'none';
        link.style.color = 'white';

        li.appendChild(link);
        ul.appendChild(li);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    criarMenu();
    adicionarItensAoMenu();
});
