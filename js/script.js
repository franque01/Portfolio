const closeBtn = document.querySelector('#close');
const menuBtn =  document.querySelector('.menubar');
const menuBar = document.getElementById('menu');

closeBtn.addEventListener('click', () => {
    menuBar.style.right = '-100%';
})
menuBtn.addEventListener('click', () => {
    menuBar.style.right = '-2%';
})