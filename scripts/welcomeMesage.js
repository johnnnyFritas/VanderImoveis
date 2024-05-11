const h2WelAnim = document.getElementById('filterH2Anim');
const h2WelAnim2 = document.getElementById('filterH2Anim2');
const h2WelAnim3 = document.getElementById('filterH2anim3-title');

window.addEventListener('load', () => {
    welcome();
});

const welcome =()=> {
    h2WelAnim.classList.remove('header__options__filter-welAnim');
    h2WelAnim.classList.add('animationFilterHel');

    setTimeout(()=> {    
        h2WelAnim2.classList.remove('header__options__filter-welAnim2');
        h2WelAnim2.classList.add('animationFilterWel');
    }, 2500);

    setTimeout(()=> {
        afterWelcome();
    }, 5000);
}

const afterWelcome=()=> {
    h2WelAnim3.innerHTML = "Filtro:";
    h2WelAnim3.classList.add('header__options__filter-titleAnim');

    for(let i = 0; i <= 2; i++) {
        const divTypeFilter = document.querySelector('#filterDivAnim' + i);

        divTypeFilter.classList.add('animationFilterDiv');
    }

    for(let i = 0; i <= 2; i++) {
        const idTypeFilter = document.querySelector('#filter' + i);

        idTypeFilter.classList.remove('header__options__filter-div-reg');
        if(i == 1) {
            idTypeFilter.classList.add('animationFilterId2')
        }else { 
            idTypeFilter.classList.add('animationFilterId');
        }
    }

    h2WelAnim.classList.remove('animationFilterHel');
    botao.classList.add('animationFilterButton');
}