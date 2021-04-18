var menuBtn = document.querySelector('.header__menu-btn')
var header__list = document.querySelector('.header__list')




menuBtn.addEventListener('click', function  (){
    menuBtn.classList.toggle('active')
    header__list.classList.toggle('active')
   
    
})


