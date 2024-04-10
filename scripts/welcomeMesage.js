const h2WelAnim = document.getElementById('filterH2Anim');
const h2WelAnim2 = document.getElementById('filterH2Anim2');
const h2WelAnim3 = document.getElementById('filterH2anim3-title');

const divTypeFilter = document.getElementById('filterDivAnim-reg');
const divTypeFilter2 = document.getElementById('filterDivAnim-fin');
const divTypeFilter3 = document.getElementById('filterDivAnim-type');

const idTypeFilter = document.getElementById('regiao');
const idTypeFilter2 = document.getElementById('finalidade');
const idTypeFilter3 = document.getElementById('tipo');

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
    divTypeFilter.classList.add('animationFilterDiv');
    divTypeFilter2.classList.add('animationFilterDiv');
    divTypeFilter3.classList.add('animationFilterDiv');

    idTypeFilter.classList.remove('header__options__filter-div-reg');
    idTypeFilter2.classList.remove('header__options__filter-div-reg');
    idTypeFilter3.classList.remove('header__options__filter-div-type');

    idTypeFilter.classList.add('animationFilterId');
    idTypeFilter2.classList.add('animationFilterId2');
    idTypeFilter3.classList.add('animationFilterId');
    botao.classList.add('animationFilterButton');
}