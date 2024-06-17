export function homeBtn() {
    const homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', () => {
        alert('home!');
    });
}

export function menuBtn() {
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
        alert('menu!');
    });
}

export function aboutBtn() {
    const aboutBtn = document.querySelector('.about-btn');
    aboutBtn.addEventListener('click', () => {
        alert('about!');
    });
}