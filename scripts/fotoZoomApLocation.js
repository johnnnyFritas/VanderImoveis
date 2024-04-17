const fotoLocation = document.getElementById('fotoLocation');
const locationImage = document.getElementById('locationImage');
const sectionLocation = document.getElementById('location');

locationImage.addEventListener('click', ()=> {
    if(fotoLocation.className != 'zoomLoc') {
        const srcLoc = locationImage.getAttribute('src');
    
        fotoLocation.setAttribute('src', srcLoc);
        fotoLocation.classList.add('zoomLoc');
        sectionLocation.classList.remove('location');
        sectionLocation.classList.add('hideSection');

        document.body.classList.add('hidden');
    }
});

fotoLocation.addEventListener('click', ()=> {
    if(fotoLocation.className === 'zoomLoc') {
        fotoLocation.setAttribute('src', "");
        fotoLocation.classList.remove('zoomLoc');
        sectionLocation.classList.remove('hideSection');
        sectionLocation.classList.add('location');

        document.body.classList.remove('hidden');
    }
});