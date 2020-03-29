export default function navStyler(){
    const mdsNavbar = document.getElementById('mds-navbar');
    const navbar = document.querySelector('.navbar');
    const mdsMediaQuery = window.matchMedia('(min-width: 992px)');
    const mdsMenuLink = document.querySelectorAll('.mds-menu-link');

    mdsMenuLink.forEach(item => {
        item.addEventListener('click', event => {
            if(navbar.classList.contains('navbar-expand-lg') && mdsMediaQuery.matches){
                mdsNavbar.classList.remove('mds-navbar-styler')
            }
            else{
                mdsNavbar.classList.toggle('mds-navbar-styler')
            }
        })
    })
};