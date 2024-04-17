//first slide
const arrayFoto = document.querySelectorAll('.swiper-slide');
const fotoZoom = document.getElementById('fotoZoom');
const sectionSlidesAp = document.getElementById('slidesAp');

for(let i = 0; i < arrayFoto.length; i++) {
    const fotoClick = document.querySelectorAll('#foto' + i);

    arrayFoto[i].addEventListener('click', ()=> {
        fotoClick.forEach(e => {         
            const fotoLink = e.getAttribute('src');
            const fotoLegend =  e.getAttribute('alt');
            fotoZoom.setAttribute('src', fotoLink);
            fotoZoom.setAttribute('alt', fotoLegend);
            showFoto();
        });
    });

    fotoZoom.addEventListener('click', ()=> {
        if(fotoZoom.className === 'centerFotoZoom') {
            hideFoto();
        }
    });
}

function showFoto() {
    fotoZoom.classList.remove('hideFotoZoom');
    fotoZoom.classList.remove('resetFoto');
    fotoZoom.classList.add('centerFotoZoom');

    document.body.classList.add('hidden');

    sectionSlidesAp.classList.add('hideSection');
}

function hideFoto() {
    fotoZoom.classList.remove('centerFotoZoom');
    fotoZoom.classList.add('hideFotoZoom');

    document.body.classList.remove('hidden');

    sectionSlidesAp.classList.remove('hideSection');
}

//second slide
const arrayFoto2 = document.querySelectorAll('.getSwiper-slidePresentation');
const fotoZoom2 = document.getElementById('fotoZoom1');
const sectionSlidesApPresentation = document.getElementById('slidesAp__presentation');

for(let i = 0; i < arrayFoto2.length; i++) {
    const fotoClick2 = document.querySelectorAll('#foto2-' + i);

    arrayFoto2[i].addEventListener('click', ()=> {
        fotoClick2.forEach(e => {         
            const fotoLink = e.getAttribute('src');
            const fotoLegend =  e.getAttribute('alt');
            fotoZoom2.setAttribute('src', fotoLink);
            fotoZoom2.setAttribute('alt', fotoLegend);
            showFoto2();
        });
    });

    fotoZoom2.addEventListener('click', ()=> {
        if(fotoZoom2.className === 'centerFotoZoom') {
            hideFoto2();
        }
    });
}

function showFoto2() {
    fotoZoom2.classList.remove('hideFotoZoom');
    fotoZoom2.classList.remove('resetFoto');
    fotoZoom2.classList.add('centerFotoZoom');

    document.body.classList.add('hidden');

    sectionSlidesApPresentation.classList.add('hideSection');
}

function hideFoto2() {
    fotoZoom2.classList.remove('centerFotoZoom');
    fotoZoom2.classList.add('hideFotoZoom');

    document.body.classList.remove('hidden');

    sectionSlidesApPresentation.classList.remove('hideSection');
}
