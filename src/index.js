import './index.css';

function introPg() {
    const content = document.querySelector('.content');

    const contentImg = document.createElement('div');
    contentImg.classList.add('content-background');
    content.appendChild(contentImg);

    const h1Wrapper = document.createElement('div');
    h1Wrapper.classList.add('h1-wrapper');
    contentImg.appendChild(h1Wrapper);

    const nameTitle = document.createElement('h1');
    nameTitle.classList.add('title');
    nameTitle.textContent = `fUUd NYC`;
    h1Wrapper.appendChild(nameTitle);

    const introTxtBackground = document.createElement('div');
    contentImg.appendChild(introTxtBackground);

    const textOne = document.createElement('p');
    introTxtBackground.appendChild(textOne);

    const textTwo = document.createElement('p');
    introTxtBackground.appendChild(textTwo);

    let clicked = {
        home: false,
        menu: false,
        abt: false
    };

    const homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', () => {
        if (clicked.home == false) {
            clicked.home = true;
            clicked.menu = false;
            clicked.abt = false;
            content.removeChild(contentImg);
            content.appendChild(contentImg);
            
            h1Wrapper.classList.remove();
            h1Wrapper.classList.add('home-h1-wrapper');

            nameTitle.classList.remove();
            nameTitle.classList.add('home-title');

            introTxtBackground.classList.remove();
            introTxtBackground.classList.add('home-intro-text-background');

            textOne.classList.remove();
            textOne.classList.add('home-intro-txt');
            textOne.textContent = `fUUd NYC, the newest exclusive three Michelin-starred dining experience in the heart of Manhattan. Nestled really... very high up atop One Vanderbilt in Midtown. Reveal your hidden pallet and engage all your senses with "Drakey-Yum-Yum "'s intimate culinary experience... fUUd New York.`;

            textTwo.classList.remove();
            textTwo.textContent = ``;
        }
    });

    const menuBtn = document.querySelector('.contact-btn');
    menuBtn.addEventListener('click', () => {
        if (clicked.menu == false) {
            clicked.menu = true;
            clicked.home = false;
            clicked.abt = false;
            content.removeChild(contentImg);
            content.appendChild(contentImg);
            // Remove previous page and append same elements with new classes for CSS

            h1Wrapper.classList.remove();
            h1Wrapper.classList.add('home-h1-wrapper');

            nameTitle.classList.remove();
            nameTitle.classList.add('home-title');

            introTxtBackground.classList.remove();
            introTxtBackground.classList.add('contact-intro-text-background');
            
            textOne.classList.remove();
            textOne.classList.add('home-intro-txt');
            textOne.textContent = `Hours: 10:00am - 11:00pm`;

            textTwo.classList.remove();
            textTwo.classList.add('home-intro-txt')
            textTwo.textContent = `Phone Number: 555-555-555`;
        }
    });

    const contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('click', () => {
        if (clicked.abt == false) {
            clicked.abt = true;
            clicked.home = false;
            clicked.menu = false;
            content.removeChild(contentImg);
            content.appendChild(contentImg);
        }
    });
}

introPg()