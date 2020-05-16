export default function burgerNav(){
    const navBar = document.querySelector('.navbar');
    const mdsNavbar = document.querySelector('#mds-navbar');
    const mdsMenuLinks = document.querySelectorAll('.mds-menu-link');

    // add black background to navigation
    mdsMenuLinks.forEach(item => {
        item.addEventListener('click', event => {
            if(window.innerWidth <= '992'){
                mdsNavbar.classList.remove('mds-no--before');           }
            else if(navBar.classList.contains('navbar-expand-lg') && window.innerWidth > '992'){
                mdsNavbar.classList.add('mds-no--before');
            }
            else if(!navBar.classList.contains('navbar-expand-lg') && window.innerWidth > '992'){
                mdsNavbar.classList.remove('mds-no--before');
            }
        })
    })

    // transform navbar when 
    function transformNav(){
        const changeNavAt = 100;
        const startingPoint = window.pageYOffset;
        const distance = changeNavAt - startingPoint;

        if(startingPoint > distance || window.innerWidth <= '992'){
            navBar.classList.remove('navbar-expand-lg');
            mdsNavbar.classList.remove('mds-no--before');
        }
        else {
            navBar.classList.add('navbar-expand-lg');
            mdsNavbar.classList.add('mds-no--before');
        }
    }

    window.addEventListener('scroll', transformNav);
}