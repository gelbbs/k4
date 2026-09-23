const techniqueButton = document.querySelector('.technique__button_show-all')
const techniqueButtonText = document.querySelector('.technique__button_show-all p')
const techniqueButtonImg = document.querySelector('.technique__button_show-all img')
const techniquelist = document.querySelector('.technique__list')

techniqueButton.addEventListener('click', () => {
    techniquelist.classList.toggle('show-all');
    
    if (techniqueButtonText.textContent === 'Показать всё') {
        techniqueButtonText.textContent = 'Скрыть';
        techniqueButtonImg.style.transform = 'rotate(180deg)';
    }
    else {
        techniqueButtonText.textContent = 'Показать всё';
        techniqueButtonImg.style.transform = 'rotate(0deg)';
    }
})
    
    
