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

    const textOne = document.createElement('div');
    introTxtBackground.appendChild(textOne);

    const textTwo = document.createElement('div');
    introTxtBackground.appendChild(textTwo);

    const textThree = document.createElement('div');
    introTxtBackground.appendChild(textThree);

    const textFour = document.createElement('div');
    introTxtBackground.appendChild(textFour);

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
            // Remove previous page and append same elements with new classes for CSS
            
            h1Wrapper.classList.remove();
            h1Wrapper.classList.add('home-h1-wrapper');

            nameTitle.classList.remove();
            nameTitle.classList.add('home-title');

            introTxtBackground.classList.remove();
            introTxtBackground.classList.add('home-intro-text-background');

            textOne.classList.remove();
            textOne.classList.add('home-intro-txt');
            textOne.textContent = `fUUd NYC, the newest exclusive three Michelin-starred dining experience in the heart of Manhattan. Nestled really... very high up atop One Vanderbilt in Midtown. Reveal your hidden pallet and engage all your senses with world renowned celebrity chef "Little-Drakey-Yum-Yum"'s intimate culinary experience... fUUd New York.`;

            textTwo.classList.remove();
            textTwo.textContent = '';

            textThree.classList.remove();
            textThree.textContent = '';

            textFour.classList.remove();
            textFour.textContent = '';
        }
    });

    const menuBtn = document.querySelector('.menu-btn');
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
            textOne.classList.add('menu1-intro-txt');
            textOne.textContent = `Dirty Martini: It sounds sexy but.. olives... I'll let you do the math on that I guess.`;

            textTwo.classList.remove();
            textTwo.classList.add('menu2-intro-txt')
            textTwo.textContent = `Hamburger: Loved by hamburger clowns and stolen by half-man-half-hamburger-half-cannibals everywhere.`

            textThree.classList.remove();
            textThree.classList.add('menu3-intro-txt')
            textThree.textContent = `Sandwich: Now just picture yourself, mouth watering, sinking your teeth into a sandwich. Now you know how I spend my free time.`;

            textFour.classList.remove();
            textFour.classList.add('menu4-intro-txt')
            textFour.textContent = `Lobster: Feisty, aggressive and afraid to die this lobster is as fresh as it gets! Following our sustainable sea-to-mouth philosophy we ensure every lobster comes to you straight out of the East River. Bon Appétit!`;

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

            textThree.classList.remove();
            textThree.textContent = '';

            textFour.classList.remove();
            textFour.textContent = '';
        }
    });
}

introPg()