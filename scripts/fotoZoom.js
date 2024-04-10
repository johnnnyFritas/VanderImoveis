const foto = document.getElementById('fotoZoom');
const arrayFoto = document.querySelectorAll('.swiper-slide');
const hSection = document.getElementById('highlightsSection');
const h2HTitle = document.getElementById('highlights-title');
const h2HDiv = document.getElementById('highlights__apt');
const h2HTitle2 = document.getElementById('highlights__apt-title');
const h2HExp = document.getElementById('highlights__apt-exp');
const h2HAnchor = document.getElementById('highlights__apt-anchor');

for(let i = 0; i < arrayFoto.length; i++) {
    const fotoClick = document.querySelectorAll('#foto' + i);
    arrayFoto[i].addEventListener('click', ()=> {
        if(foto.className == null || foto.className != 'fotoZoomAdjust') {
            fotoClick.forEach(e => {
                foto.classList.add('fotoZoomAdjust');
                foto.classList.remove('hideFotoZoomAdjust');

                const getFoto = e.getAttribute('src');
           
                foto.setAttribute('src', getFoto);

                arrayFoto.forEach(e => {
                    e.classList.add('hideFotoZoom');
                });

                hideAside();

            });
        }

        foto.addEventListener('click', ()=> {
            if(foto.className === 'fotoZoomAdjust') {
                foto.classList.add('hideFotoZoomAdjust');

                arrayFoto.forEach(e => {
                    e.classList.remove('hideFotoZoom');
                });

                showAside();
            }
        });
    });
}

function hideAside() {
    h2HTitle.classList.add('hideH');
    h2HDiv.classList.add('hideH');
    h2HTitle2.classList.add('hideH');
    h2HExp.classList.add('hideH');
    h2HAnchor.classList.add('hideH');

    h2HTitle.classList.remove('highlights-title');
    h2HDiv.classList.remove('highlights__apt');
    h2HTitle2.classList.remove('highlights__apt-title');
    h2HExp.classList.remove('highlights__apt-exp');
    h2HAnchor.classList.remove('highlights__apt-anchor');
}

function showAside() {
    h2HTitle.classList.add('highlights-title');
    h2HDiv.classList.add('highlights__apt');
    h2HTitle2.classList.add('highlights__apt-title');
    h2HExp.classList.add('highlights__apt-exp');
    h2HAnchor.classList.add('highlights__apt-anchor');

    h2HTitle.classList.remove('hideH');
    h2HDiv.classList.remove('hideH');
    h2HTitle2.classList.remove('hideH');
    h2HExp.classList.remove('hideH');
    h2HAnchor.classList.remove('hideH');
}