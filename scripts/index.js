
document.addEventListener('DOMContentLoaded', () => {

    let btn = document.querySelector('.header__btn');
    btn.addEventListener('click', () => {
        let elem = document.querySelector('.main')
        let rect = elem.getBoundingClientRect();
        window.scrollBy({
            left: 0,
            top: rect.top,
            behavior: 'smooth'
        })
    })
})