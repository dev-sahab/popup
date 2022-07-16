// get elements
const popup = document.getElementById('popup');
const close = document.getElementById('close');
const submitBtn = document.querySelector('.btn');

// open popup
submitBtn.onclick = () => {
    popup.classList.add('open-popup')
}

// close popup
close.onclick = () => {
    popup.classList.remove('open-popup')
}