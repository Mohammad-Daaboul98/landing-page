const nav = document.querySelector('.header');

window.onscroll =  () =>{
    var top = window.scrollY;

    if(top >= 10){
        nav.classList.add('header--active')
    }else{
        nav.classList.remove('header--active');
    }
}
