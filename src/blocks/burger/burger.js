const burgerTrigger = document.querySelector('.burger-trigger')
const burgerMenu = document.querySelector('.burger')
const burgerClose = document.querySelector('.burger-close')
const bodyBlur = document.querySelector('.blur')
const callTriggers = document.querySelectorAll('.call-trigger')
const chatTriggers = document.querySelectorAll('.chat-trigger')
const callClose = document.querySelector('.call-close')
const chatClose = document.querySelector('.chat-close')
const callModal = document.querySelector('.modal_call')
const chatModal = document.querySelector('.modal_feedback')


function toggleOverlay(targetElement, targetClass) {
  const allModals = [burgerMenu, callModal, chatModal]; 
  const isCurrentlyOpen = targetElement.classList.contains(targetClass);

  allModals.forEach(modal => {
    modal.classList.remove('burger_open', 'modal_open');
  });
  bodyBlur.classList.remove('blur-active');
  document.body.style.overflow = ''; 

  if (!isCurrentlyOpen) {
    if (targetElement === burgerMenu) {
      targetElement.classList.add('burger_open');
    } else {
      targetElement.classList.add('modal_open');
    }
    bodyBlur.classList.add('blur-active');
    document.body.style.overflow = 'hidden'; 
  }
}
burgerTrigger.addEventListener('click', () => toggleOverlay(burgerMenu, 'burger_open'));
burgerClose.addEventListener('click', () => toggleOverlay(burgerMenu, 'burger_open'));

Array.from(callTriggers).forEach(trigger => {
  trigger.addEventListener('click', () => toggleOverlay(callModal, 'modal_open'));
});
callClose.addEventListener('click', () => toggleOverlay(callModal, 'modal_open'));

Array.from(chatTriggers).forEach(trigger => {
  trigger.addEventListener('click', () => toggleOverlay(chatModal, 'modal_open'));
});
chatClose.addEventListener('click', () => toggleOverlay(chatModal, 'modal_open'));
