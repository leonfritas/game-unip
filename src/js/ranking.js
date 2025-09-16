import { baseUrl } from './service/api.js';

console.log(baseUrl); // https://bced599b6b81.ngrok-free.app


// console.log(baseUrl);
// Variáveis para nomes
const nomeRanking1 = document.getElementsByClassName("nomeRanking1");
const nomeRanking2 = document.getElementsByClassName("nomeRanking2");
const nomeRanking3 = document.getElementsByClassName("nomeRanking3");
const nomeRanking4 = document.getElementsByClassName("nomeRanking4");
const nomeRanking5 = document.getElementsByClassName("nomeRanking5");
const nomeRanking6 = document.getElementsByClassName("nomeRanking6");
const nomeRanking7 = document.getElementsByClassName("nomeRanking7");
const nomeRanking8 = document.getElementsByClassName("nomeRanking8");
const nomeRanking9 = document.getElementsByClassName("nomeRanking9");
const nomeRanking10 = document.getElementsByClassName("nomeRanking10");

// Variáveis para pontos
const pontoRanking1 = document.getElementsByClassName("pontoRanking1");
const pontoRanking2 = document.getElementsByClassName("pontoRanking2");
const pontoRanking3 = document.getElementsByClassName("pontoRanking3");
const pontoRanking4 = document.getElementsByClassName("pontoRanking4");
const pontoRanking5 = document.getElementsByClassName("pontoRanking5");
const pontoRanking6 = document.getElementsByClassName("pontoRanking6");
const pontoRanking7 = document.getElementsByClassName("pontoRanking7");
const pontoRanking8 = document.getElementsByClassName("pontoRanking8");
const pontoRanking9 = document.getElementsByClassName("pontoRanking9");
const pontoRanking10 = document.getElementsByClassName("pontoRanking10");

async function carregarRanking() {
  console.log("Chamando:", `${baseUrl}/ranking`);

  try {
    let resposta = await fetch(`${baseUrl}/ranking`);
    console.log("Resposta bruta:", resposta.text());

    // Verifica se a resposta é OK
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status}`);
    }

    // Extrai o JSON da resposta
    const ranking = await resposta.json(); 
    
    console.log(ranking);

    // Atribuições
    if (ranking.length > 0) {
      nomeRanking1[0].innerHTML = ranking[0].nomeJogador; 
      pontoRanking1[0].innerHTML = ranking[0].pontos; 
    }
    if (ranking.length > 1) {
      nomeRanking2[0].innerHTML = ranking[1].nomeJogador; 
      pontoRanking2[0].innerHTML = ranking[1].pontos; 
    }
    if (ranking.length > 2) {
      nomeRanking3[0].innerHTML = ranking[2].nomeJogador; 
      pontoRanking3[0].innerHTML = ranking[2].pontos; 
    }
    if (ranking.length > 3) {
      nomeRanking4[0].innerHTML = ranking[3].nomeJogador; 
      pontoRanking4[0].innerHTML = ranking[3].pontos; 
    }
    if (ranking.length > 4) {
      nomeRanking5[0].innerHTML = ranking[4].nomeJogador; 
      pontoRanking5[0].innerHTML = ranking[4].pontos; 
    }
    if (ranking.length > 5) {
      nomeRanking6[0].innerHTML = ranking[5].nomeJogador; 
      pontoRanking6[0].innerHTML = ranking[5].pontos; 
    }
    if (ranking.length > 6) {
      nomeRanking7[0].innerHTML = ranking[6].nomeJogador; 
      pontoRanking7[0].innerHTML = ranking[6].pontos; 
    }
    if (ranking.length > 7) {
      nomeRanking8[0].innerHTML = ranking[7].nomeJogador; 
      pontoRanking8[0].innerHTML = ranking[7].pontos; 
    }
    if (ranking.length > 8) {
      nomeRanking9[0].innerHTML = ranking[8].nomeJogador; 
      pontoRanking9[0].innerHTML = ranking[8].pontos; 
    }
    if (ranking.length > 9) {
      nomeRanking10[0].innerHTML = ranking[9].nomeJogador; 
      pontoRanking10[0].innerHTML = ranking[9].pontos; 
    }
  } catch (err) {
    console.error("Erro ao carregar ranking:", err);
  }
}
carregarRanking();
