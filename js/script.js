const closeBtn = document.querySelector('#close');
const menuBtn =  document.querySelector('.menubar');
const menuBar = document.getElementById('menu');
const navLinks = document.querySelectorAll('.headlinks')

closeBtn.addEventListener('click', () => {
    menuBar.style.right = '-100%';
})
menuBtn.addEventListener('click', () => {
    menuBar.style.right = '-2%';
})

for(let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', () => {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
    
}