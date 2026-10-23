const formulario = document.getElementById('formulario');
const saida = document.getElementById('json');
const corpoTabela = document.querySelector('#tabela tbody');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const dados = new FormData(formulario);
    const objeto = {};
    for (const [chave, valor] of dados) {
        objeto[chave] = valor;
    }

    saida.textContent = JSON.stringify(objeto, null, 2);

    const linha = corpoTabela.insertRow();
    for (const campo of ['nome', 'email', 'idade', 'curso']) {
        linha.insertCell().textContent = objeto[campo];
    }

    formulario.reset();
});