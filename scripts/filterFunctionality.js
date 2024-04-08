//global variables
const piata = document.getElementById('piata');
const mar = document.getElementById('mar');

//local variables
const botao = document.getElementById('botao');
const regiao = document.getElementById('regiao');
const finalidade = document.getElementById('finalidade');
const tipo = document.getElementById('tipo');
const nf = document.getElementById('nf');

//Filter function (here we called the functions to make the filter usable)
botao.addEventListener('click', ()=> {
    if(regiao.value === 'salvador' && finalidade.value === 'comprar' && tipo.value === 'apartamento') {
        mostraPiata();
        mostraMar();
        escondeNf();
    }else if(regiao.value === 'salvador' && finalidade.value === 'finalidade' && tipo.value === 'tipo') {
        mostraPiata();
        mostraMar();
        escondeNf();
      }else if(regiao.value === 'salvador' && finalidade.value === 'comprar' && tipo.value === 'tipo') {
        mostraPiata();
        mostraMar();
        escondeNf();
      }else if(regiao.value === 'regiao' && finalidade.value === 'finalidade' && tipo.value === 'tipo') {
        escondePiata();
        escondeMar();
        escondeNf();
      }else if(regiao.value === 'regiao' && finalidade.value === 'comprar' && tipo.value === 'tipo') {
        mostraPiata();
        mostraMar();
        escondeNf();
      }else {
        escondePiata();
        escondeMar();
        mostraNf();
      }
});

//Functions used above
function mostraPiata() {
    piata.classList.remove('header__options__houses-div');
    piata.classList.add('header__options__houses-piata-Vis');
}

function escondePiata() {
    piata.classList.remove('header__options__houses-piata-Vis');
    piata.classList.add('header__options__houses-div');
}

function mostraMar() {
    mar.classList.remove('header__options__houses-div');
    mar.classList.add('header__options__houses-mar-Vis');
}

function escondeMar() {
    mar.classList.remove('header__options__houses-mar-Vis');
    mar.classList.add('header__options__houses-div');
}

function mostraNf() {
    nf.classList.remove('header__options__houses-nf');
    nf.classList.add('header__options__houses-nf-Vis');
}

function escondeNf() {
    nf.classList.remove('header__options__houses-nf-Vis');
    nf.classList.add('header__options__houses-nf');
}