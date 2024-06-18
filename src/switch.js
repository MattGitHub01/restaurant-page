export function homeBtn() {
    let homePg = false;
    const homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', () => {
        if (homePg == false) {
            homePg = true;
            const content = document.querySelector('.content');

            const contentImg = document.createElement('div');
            contentImg.classList.add('home-content-background');
            content.appendChild(contentImg);

            const h1Wrapper = document.createElement('div');
            h1Wrapper.classList.add('home-h1-wrapper');
            contentImg.appendChild(h1Wrapper);

            const nameTitle = document.createElement('h1');
            nameTitle.classList.add('home-title');
            nameTitle.textContent = `fÜdhaÜs NYC`;
            h1Wrapper.appendChild(nameTitle);

            const introTxtBackground = document.createElement('div');
            introTxtBackground.classList.add('home-intro-text-background');
            contentImg.appendChild(introTxtBackground)
            
            const introTxt = document.createElement('p');
            introTxt.classList.add('home-intro-txt');
            introTxt.textContent = `fÜdhaÜs NYC, the newest exclusive three Michelin-starred exclusive dining experience in the heart of Manhattan. Nestled really... very high up atop One Vanderbilt in Midtown, it is the newest creation of celebrity chef Drake Knöpfnenfüdsensön. Reveal your hidden pallet and engage all your senses with "The Knopf"'s intimate culinary experience... fÜdhaÜs New York.`;
            introTxtBackground.appendChild(introTxt);
        }
    });
}

export function menuBtn() {
    let menuPg = false;
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
        if (menuPg == false) {
            menuPg = true
            alert('menu!');
        }
    });
}

export function aboutBtn() {
    const aboutBtn = document.querySelector('.about-btn');
    aboutBtn.addEventListener('click', () => {
        alert('about!');
    });
}