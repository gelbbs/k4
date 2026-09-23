const aboutButton = document.querySelector('.about__button_show-all')
const aboutButtonText = document.querySelector('.about__button_show-all p')
const aboutButtonImg = document.querySelector('.about__button_show-all img')
const aboutText = document.querySelector('.about__content')
const tablet = document.querySelector('.about .tablet')
const desktop = document.querySelector('.about .desktop')
const anekdot = document.createElement('p');
const br = document.createElement('br');
anekdot.textContent = 'Вот и верь после этого людям! Я ему отдалась при луне, a он взял мои девичьи груди, и узлом завязал на спине.';
const secretElement = document.createElement('div')
secretElement.append(br, br, anekdot)

aboutButton.addEventListener('click', () => {
    tablet.classList.toggle('tablet');
    desktop.classList.toggle('desktop');
    if (!aboutText.contains(secretElement)) {

        aboutText.append(secretElement);}
    else {
        aboutText.removeChild(secretElement);
    }


    
    if (aboutButtonText.textContent === 'Читать далее') {
        aboutButtonText.textContent = 'Скрыть';
        aboutButtonImg.style.transform = 'rotate(180deg)';
    }
    else {
        aboutButtonText.textContent = 'Читать далее';
        aboutButtonImg.style.transform = 'rotate(0deg)';
    }
})
    
    