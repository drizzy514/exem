var textMenu = document.querySelector('.menu-btn')
var text = document.querySelector('.text')

textMenu.addEventListener('click', function(){
    textMenu.classList.toggle('text-active')
    text.classList.toggle('text-active')
})
