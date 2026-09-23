const brandsButton = document.querySelector('.brands__button_show-all')
const brandsButtonText = document.querySelector('.brands__button_show-all p')
const brandsButtonImg = document.querySelector('.brands__button_show-all img')
const brandslist = document.querySelector('.brands__list')

brandsButton.addEventListener('click', () => {
    brandslist.classList.toggle('show-all');
    
    if (brandsButtonText.textContent === 'Показать всё') {
        brandsButtonText.textContent = 'Скрыть';
        brandsButtonImg.style.transform = 'rotate(180deg)';
    }
    else {
        brandsButtonText.textContent = 'Показать всё';
        brandsButtonImg.style.transform = 'rotate(0deg)';
    }
})
    
    




