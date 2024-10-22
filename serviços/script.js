document.getElementById('form-servico').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const titulo = this[0].value;
    const descricao = this[1].value;
    const preco = parseFloat(this[2].value).toFixed(2);

    const servico = document.createElement('div');
    servico.classList.add('bg-gray-100', 'p-4', 'rounded-lg', 'mb-4');
    servico.innerHTML = `
        <h3 class="text-xl font-semibold">${titulo}</h3>
        <p>${descricao}</p>
        <p class="text-green-600">Preço: R$ ${preco}</p>
        <button class="mt-2 bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-700" onclick="comprarServico('${titulo}')">Comprar</button>
    `;
    document.getElementById('lista-servicos').appendChild(servico);

    this.reset();
});

function filtrarServicos(categoria) {
    alert(`Filtrando serviços da categoria: ${categoria}`);
    // Implemente a lógica para filtrar serviços
}

// Função para simular a compra de um serviço
function comprarServico(titulo) {
    alert(`Você comprou o serviço: ${titulo}`);
}

// Mostrar/ocultar categorias ao passar o mouse
const categoriasButton = document.getElementById('toggle-categorias');
const categoriasList = document.getElementById('categorias-list');

categoriasButton.addEventListener('mouseenter', function() {
    categoriasList.style.display = 'block';
});

categoriasButton.addEventListener('mouseleave', function() {
    categoriasList.style.display = 'none';
});

categoriasList.addEventListener('mouseenter', function() {
    categoriasList.style.display = 'block';
});

categoriasList.addEventListener('mouseleave', function() {
    categoriasList.style.display = 'none';
});
