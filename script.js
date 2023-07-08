let ham = document.getElementById('ham')
let nav = document.getElementById('nav')
let i = document.querySelector('#fa')
ham.addEventListener('click', () => {
    nav.classList.toggle('active')
    if (i.classList.contains('fa-bars')) {
        i.classList.remove('fa-xmark')
        i.classList.add('fa-bars')  
    } else {
        i.classList.add('fa-bars')
        i.classList.remove('fa-xmark')

    }
})