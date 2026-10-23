/* Regras:
• Se o campo estiver vazio, exiba "Digite um ID.".
• Se o post não existir, exiba em vermelho: "Post não encontrado (ID X). Os IDs válidos vão de 1 a 5." — substituindo X pelo valor digitado. */

const posts = [
    { userId: 1, id: 1, title: "Primeiro post", body: "Aprendendo a manipular o DOM." },
    { userId: 1, id: 2, title: "Segundo post", body: "Arrays de objetos são parecidos com o JSON de uma API." },
    { userId: 2, id: 3, title: "Terceiro post", body: "Em breve vamos buscar estes dados no servidor." },
    { userId: 2, id: 4, title: "Quarto post", body: "O método find devolve o primeiro item encontrado." },
    { userId: 3, id: 5, title: "Quinto post", body: "Se nada for encontrado, find devolve undefined." }
];

const campo = document.getElementById("idPost");
const resultado = document.getElementById("resultado");

document.getElementById("btnBuscar").addEventListener("click", () => {
    const valor = campo.value.trim();

    if (valor === "") {
        resultado.textContent = "Digite um ID.";
        return;
    }

    const post = posts.find(p => p.id === Number(valor));

    if (!post) {
        resultado.innerHTML = "";
        const erro = document.createElement("p");
        erro.className = "erro";
        erro.textContent = `Post não encontrado (ID ${valor}). Os IDs válidos vão de 1 a 5.`;
        resultado.appendChild(erro);
        return;
    }

    resultado.innerHTML = "";
    const titulo = document.createElement("h2");
    titulo.textContent = post.title;
    const corpo = document.createElement("p");
    corpo.textContent = post.body;
    resultado.append(titulo, corpo);
});
