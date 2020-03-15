export default function burgerNav(){
    const navBar = document.querySelector('.navbar')

    function transformNav(event){
        const changeNavAt = navBar.getBoundingClientRect().bottom
        const startingPoint = window.pageYOffset
        const distance = changeNavAt - startingPoint
        if(startingPoint > distance){
            navBar.classList.remove('navbar-expand-lg')
        }
        else{
            navBar.classList.add('navbar-expand-lg')
        }
    }

    window.addEventListener('scroll', transformNav);
}