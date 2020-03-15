export default function navStyler(){
    // navbarStyle has the black transparent background. The goal is to show it whenever the menu is dropped down and else make it disappear
    const navBarCollapse = document.querySelector('.mds-navbar-collapse');
    const navbarStyle = document.querySelector('.mds-navbar-style');
    const menuLink = document.querySelectorAll('.mds-menu-link');

    menuLink.forEach(link => {
        link.addEventListener('click', function(){
            if(navBarCollapse.classList.contains(navbarStyle)){
                navBarCollapse.classList.remove(navbarStyle)
            }
            else{
                navBarCollapse.classList.add(navbarStyle);
            }
        })
    })
}