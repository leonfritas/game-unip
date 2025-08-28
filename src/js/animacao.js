const containers = document.querySelectorAll(".conteudo")
const home = document.getElementById("home")
const body = document.getElementById("body")
const jogo = document.getElementById("jogo")
const selectCaracter = document.getElementsByClassName('select-caracter')
const audioGame = document.getElementsByClassName('audioGame')
const audioGameFalhou = document.getElementsByClassName('audioGameFalhou')
let menuHamburguer = document.getElementById('menu-hamburguer')
const turnYourPhone = document.getElementsByClassName('turnYourPhone')







home.addEventListener("click", () => {
    for(i = 0; i <= 1; i++){
        containers[i].classList.remove("mostrar")
    }
    menuHamburguer.checked = false;
    body.classList.remove('background')
    
    
    turnYourPhone[0].style = esconderObjeto
    imgPlayPause[0].style = esconderObjeto
    containers[0].classList.add("mostrar")
    //
    body.classList.remove("mostrar")
    //
    selectCaracter[0].classList.remove('mostrarcaracter')
    gameBoard[0].classList.remove('mostrargame-board')
    audioGame[0].src = ''
})


jogo.addEventListener("click", ()=>{
    body.classList.add('background')
    menuHamburguer.checked = false;

    turnYourPhone[0].classList.add('esconderTurnYourPhone')
    imgPlayPause[0].style = mostrarObjeto
    audioGame[0].src = audioStartGame



    for(i = 0; i <=1; i++){
        containers[i].classList.remove("mostrar")
    }
    
    containers[1].classList.add("mostrar")
    //
    body.classList.add("mostrar")

    selectCaracter[0].classList.add('mostrarcaracter')
    gameBoard[0].classList.remove('mostrargame-board')

    const loopReset = setInterval(()=>{

        const obstaculoPosition = obstaculo.offsetLeft;
        const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
  
        if (obstaculoPosition < 100 && obstaculoPosition > 0 && personagemPosition < 80){

            clearInterval(loopReset)

            audioGameFalhou[0].src = audioGameOver
            mostrarDisqueteSalvar()
            
            obstaculo.style.animation = pararAnimacao
            obstaculo.style.left = `${obstaculoPosition}px`;
    
            personagem.style.animation = pararAnimacao
            personagem.style.bottom = `${personagemPosition}px`;
    
            personagem.src = imgGameOver
    
            botaoReset[0].style = mostrarObjeto

        }
    }, 10);
    
})