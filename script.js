function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "img/menu_white_36dp.svg";
     }else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})
