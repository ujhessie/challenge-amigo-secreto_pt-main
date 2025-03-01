// variaveis  globais
const ul_lista_de_amigos = document.querySelector("#listaAmigos");
const iAmigo = document.querySelector("#amigo");
const amigosArray = [];
const formulario = document.querySelector("form");
const buttonAdd = document.querySelector(".button-add");
const ul_lista_sorteados = document.querySelector(".result-list");
// funções globais
iAmigo.focus();
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
});

iAmigo.addEventListener("input", (event) => {
  iAmigo.value.length != 0
    ? buttonAdd.removeAttribute("disabled")
    : buttonAdd.setAttribute("disabled", "disabled");
});

// funçao de adicionar item ao array e atualizar na tela
const adicionarAmigo = () => {
  // adicionar no array
  amigosArray.push(iAmigo.value);

  // Atualizar a lista no html
  const novoAmigo = document.createElement("li");
  novoAmigo.innerHTML = iAmigo.value;
  ul_lista_de_amigos.appendChild(novoAmigo);

  //   Limpar o input do nome do amigo
  iAmigo.value = "";
};

const sortearAmigo = () => {
  // Verificar se o array de amigos não está vazio
  amigosArray.length != 0
    ? null
    : window.alert(
        "Coe meno. O bagulho nem tem nome ainda. Preenche a ideia aí q fica tudo certo"
      );

  // Gerar um numero aleatorio
  const numeroAleatorio = Math.floor(Math.random() * amigosArray.length);
  const amigoSorteado = amigosArray[numeroAleatorio];

  const li_amigoSorteado = document.createElement("li");
  li_amigoSorteado.innerHTML = amigoSorteado

  ul_lista_sorteados.appendChild(li_amigoSorteado)
};
