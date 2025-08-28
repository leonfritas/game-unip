const cardPersonagens = document.querySelectorAll(".card-caracter");

cardPersonagens.forEach((cardPersonagem) => {
  cardPersonagem.addEventListener("mouseenter", () => {
    const idSelecionado = cardPersonagem.dataset.id;

    const personagemSelecionado = document.querySelector(".selecionado");
    if (personagemSelecionado) {
      personagemSelecionado.classList.remove("selecionado");
    }

    const showPersonagem = document.querySelector(".show-personagem");
    if (showPersonagem) {
      showPersonagem.src = `././src/images/jogo/${idSelecionado}.gif`;
      console.log(showPersonagem.src);
    }

    cardPersonagem.classList.add("selecionado");
  });
});
