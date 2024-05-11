//global variables
const piata = document.getElementById('piata');
const mar = document.getElementById('mar');

//local variables
const botao = document.getElementById('botao');
const nf = document.getElementById('nf');

//Filter function (here we called the functions to make the filter usable)
for(let i = 0; i <= 2; i++) {
    const filterSelect = document.querySelector('#filter' + i);

    botao.addEventListener('click', ()=> { 
        const currentElement = [];
        currentElement[i] = filterSelect.value;

        if(currentElement[0] === 'salvador' || currentElement[1] === 'comprar' || currentElement[2] === 'apartamento') {
            showAp();
        }else {
            hideAp();
        }
    });
}
//Functions used above
function showAp() {
    for(let i = 0; i <= 3; i++) {
        const ap = document.querySelector('#ap' + i);

        ap.classList.remove('header__options__houses-div');
        ap.classList.add('header__options__houses-Vis');

        nf.classList.remove('header__options__houses-nf-Vis');
        nf.classList.add('header__options__houses-nf');

        if(i == 0) {
            ap.classList.add('piata');
            ap.classList.add('pd1');
        }else if(i == 1) {
            ap.classList.add('vistaMar');
        }else if(i == 2) {
            ap.classList.add('sensia');
            ap.classList.add('pd1');
        }
    }
}

function hideAp() {
    for(let i = 0; i <= 3; i++) {
        const ap = document.querySelector('#ap' + i);

        ap.classList.add('header__options__houses-div');
        ap.classList.remove('header__options__houses-Vis');

        nf.classList.remove('header__options__houses-nf');
        nf.classList.add('header__options__houses-nf-Vis');

        if(i == 0) {
            ap.classList.remove('piata');
        }else if(i == 1) {
            ap.classList.remove('vistaMar');
        }
    }
}