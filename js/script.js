//huberger menu responsif
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#humberger-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
}

//klik luar sidebar
const hamberger = document.querySelector('#humberger-menu');
document.addEventListener('click', function(e){
    if(!hamberger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});