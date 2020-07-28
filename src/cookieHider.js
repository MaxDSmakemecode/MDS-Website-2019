export default function cookieHider(){
    const cookieButton = document.getElementById('cookie-hider')
    const cookieBanner = document.getElementById('cookie-element')

    cookieButton.addEventListener('click', function(){
        cookieBanner.classList.add('cookie-banner-hider')
    })
}