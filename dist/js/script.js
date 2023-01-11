// Hamburger
const hamburger = document.querySelector('#hamburger');
const NavMenu = document.querySelector('#NavMenu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    NavMenu.classList.toggle('hidden');
});

//Navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const pushtop = document.querySelector('#pushtop');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        pushtop.classList.remove('hidden');
        pushtop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        pushtop.classList.remove('flex');
        pushtop.classList.add('hidden');
    }
};

//another click
window.addEventListener('click',function(e){
    if(e.target != hamburger && e.target!= NavMenu){
        hamburger.classList.remove('hamburger-active');
        NavMenu.classList.add('hidden');
    };
});


