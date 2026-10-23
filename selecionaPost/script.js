/* Regras:
- A primeira opção do select deve ser "Selecione um post" e, com ela escolhida, a área de comentários fica vazia.
- Cada comentário mostra nome, e-mail e texto, e o título da seção deve indicar a quantidade: "Comentários (2)". */


const posts = [
    { id: 1, title: "Introdução ao DOM" },
    { id: 2, title: "Eventos em JavaScript" },
    { id: 3, title: "O que é uma API?" }
];
const comentarios = [
    { postId: 1, id: 1, name: "Ana", email: "ana@email.com", body: "Explicação muito clara!" },
    { postId: 1, id: 2, name: "Bruno", email: "bruno@email.com", body: "Gostei do exemplo do getElementById." },
    { postId: 2, id: 3, name: "Carla", email: "carla@email.com", body: "addEventListener é bem melhor que onclick." },
    { postId: 3, id: 4, name: "Diego", email: "diego@email.com", body: "A analogia do garçom ajudou muito." },
    { postId: 3, id: 5, name: "Elisa", email: "elisa@email.com", body: "Quero testar o JSONPlaceholder!" },
    { postId: 3, id: 6, name: "Fábio", email: "fabio@email.com", body: "E o método POST, como funciona?" }

];

const select = document.getElementById("post");
const areaComentarios = document.getElementById("comentarios");

const opcaoInicial = document.createElement("option");
opcaoInicial.value = "";
opcaoInicial.textContent = "Selecione um post";
select.appendChild(opcaoInicial);

posts.forEach(post => {
    const option = document.createElement("option");
    option.value = post.id;
    option.textContent = post.title;
    select.appendChild(option);
});

select.addEventListener("change", () => {
    areaComentarios.innerHTML = "";
    if (select.value === "") return;

    const filtrados = comentarios.filter(c => c.postId === Number(select.value));

    const titulo = document.createElement("h2");
    titulo.textContent = `Comentários (${filtrados.length})`;
    areaComentarios.appendChild(titulo);

    filtrados.forEach(c => {
        const div = document.createElement("div");

        const nome = document.createElement("strong");
        nome.textContent = c.name;

        const email = document.createElement("em");
        email.textContent = c.email;

        const texto = document.createElement("p");
        texto.textContent = c.body;

        div.append(nome, " ", email, texto);
        areaComentarios.appendChild(div);
    });
});
