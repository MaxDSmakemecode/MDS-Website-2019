export default function burgerNav(){
    const navBar = document.querySelector('.navbar');
    const navBarCollapsed = document.querySelector('.navbar-collapse');
    const mdsBurger = document.getElementById('mds-burger');
    const mdsMenuLinks = document.querySelectorAll('.mds-menu-link');

    mdsMenuLinks.forEach(item => {
        item.addEventListener('click', event => {
            if(window.innerWidth <= '992'){
                navBarCollapsed.classList.remove('mds-no--before')
            }
            else if(navBar.classList.contains('navbar-expand-lg') && window.innerWidth > '992'){
                navBarCollapsed.classList.add('mds-no--before')
            }
            else if(!navBar.classList.contains('navbar-expand-lg') && window.innerWidth > '992'){
                navBarCollapsed.classList.remove('mds-no--before')
            }
        })
    })

    function transformNav(){
        const changeNavAt = navBar.getBoundingClientRect().bottom
        const startingPoint = window.pageYOffset
        const distance = changeNavAt - startingPoint

        if(startingPoint > distance || window.innerWidth <= '992'){
            navBar.classList.remove('navbar-expand-lg');
            navBarCollapsed.classList.remove('mds-no--before');
        }
        else {
            navBar.classList.add('navbar-expand-lg');
            navBarCollapsed.classList.add('mds-no--before');
        }
    }

    window.addEventListener('scroll', transformNav);
}