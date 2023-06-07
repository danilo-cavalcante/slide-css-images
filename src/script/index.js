const images = document.querySelectorAll('.slide');
const arrowBack = document.getElementById('seta-voltar');
const arrowAdvance = document.getElementById('seta-avancar');
let currentImage = 0;

function showImage() {
    images[currentImage].classList.add('mostrar')
}

function hideOpenedImage() {
    const openedImage = document.querySelector('.mostrar')
    openedImage.classList.remove('mostrar')
}

arrowAdvance.addEventListener('click', ()=> {
    if(currentImage === images.length -1){
        return;
    }
    
    currentImage ++;
    
    hideOpenedImage();
    showImage();
    showOrHideArrows();
});

arrowBack.addEventListener('click', ()=> {
    if(currentImage === 0){
        return;
    }
    
    currentImage --;
    
    hideOpenedImage();
    showImage();
    showOrHideArrows();
});

function showOrHideArrows() {
    const isNotFirstImage = currentImage !== 0;
    if(isNotFirstImage){
        arrowBack.classList.remove('opacidade')
    } else {
        arrowBack.classList.add('opacidade')
    }
    
    const isLastImage = currentImage !== 0 && currentImage === images.length -1;
    if(isLastImage){
        arrowAdvance.classList.add('opacidade')
    } else {
        arrowAdvance.classList.remove('opacidade')
    }
}