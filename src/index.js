import './index.css';

function siteStart() {
    const content = document.querySelector('.content');

    const contentBckgrnd = document.createElement('div');
    contentBckgrnd.classList.add('content-background');
    content.appendChild(contentBckgrnd);

    const titleBckgrnd = document.createElement('div');
    titleBckgrnd.classList.add('h1-wrapper');
    contentBckgrnd.appendChild(titleBckgrnd);

    const titleTxt = document.createElement('h1');
    titleTxt.classList.add('title');
    titleTxt.textContent = `FuuD NYC`;
    titleBckgrnd.appendChild(titleTxt);

    const txtBackground = document.createElement('div');
    txtBackground.classList.add('text-background');
    contentBckgrnd.appendChild(txtBackground);

    const txtAreaOne = document.createElement('div');
    txtBackground.appendChild(txtAreaOne);

    const txtAreaTwo = document.createElement('div');
    txtBackground.appendChild(txtAreaTwo);

    const txtAreaThree = document.createElement('div');
    txtBackground.appendChild(txtAreaThree);

    const txtAreaFour = document.createElement('div');
    txtBackground.appendChild(txtAreaFour);

    let pageActive = {
        home: false,
        menu: false,
        abt: false
    };

    const homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', () => {
        if (pageActive.home == false) {
            pageActive.home = true;
            pageActive.menu = false;
            pageActive.abt = false;
            content.removeChild(contentBckgrnd);
            content.appendChild(contentBckgrnd);
            // Remove previous page and append same elements with new classes for CSS
            
            titleBckgrnd.classList.replace('h1-wrapper', 'pages-h1-background');

            titleTxt.classList.replace('title', 'pages-title');

            txtBackground.classList.replace('pages-text-background', 'text-background');

            txtAreaOne.classList.add('txt');
            txtAreaOne.textContent = `fUUd NYC, the newest exclusive three Michelin-starred dining experience in the heart of Manhattan. Nestled really... very high up atop One Vanderbilt in Midtown. Reveal your hidden pallet and engage all your senses with world renowned celebrity chef "Little-Drakey-Yum-Yum"'s intimate culinary experience... fUUd New York.`;

            txtAreaTwo.textContent = '';

            txtAreaThree.textContent = '';

            txtAreaFour.textContent = '';
        }
    });

    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
        if (pageActive.menu == false) {
            pageActive.menu = true;
            pageActive.home = false;
            pageActive.abt = false;
            content.removeChild(contentBckgrnd);
            content.appendChild(contentBckgrnd);
            // Remove previous page and append same elements with new classes for CSS

            titleBckgrnd.classList.replace('h1-wrapper', 'pages-h1-background');

            titleTxt.classList.replace('title', 'pages-title');

            txtBackground.classList.replace('text-background', 'pages-text-background');
            
            txtAreaOne.classList.add('txt');
            txtAreaOne.textContent = `Dirty Martini: It sounds sexy but.. olives... I'll let you do the math on that I guess.`;

            txtAreaTwo.classList.add('txt');
            txtAreaTwo.textContent = `Hamburger: Loved by hamburger clowns and stolen by half-man-half-hamburger-half-cannibals everywhere.`;

            txtAreaThree.classList.add('txt');
            txtAreaThree.textContent = `Sandwich: Now just picture yourself, mouth watering, sinking your teeth into a sandwich. Now you know how I spend my free time.`;

            txtAreaFour.classList.add('txt');
            txtAreaFour.textContent = `Lobster: Feisty, aggressive and afraid to die this lobster is as fresh as it gets! Following our sustainable sea-to-mouth philosophy we ensure every lobster comes to you straight out of the East River. Bon Appétit!`;
        }
    });

    const contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('click', () => {
        if (pageActive.abt == false) {
            pageActive.abt = true;
            pageActive.home = false;
            pageActive.menu = false;
            content.removeChild(contentBckgrnd);
            content.appendChild(contentBckgrnd);
            // Remove previous page and append same elements with new classes for CSS

            titleBckgrnd.classList.replace('h1-wrapper', 'pages-h1-background');

            titleTxt.classList.replace('title', 'pages-title');

            txtBackground.classList.replace('text-background', 'pages-text-background');

            txtAreaOne.classList.add('txt');
            txtAreaOne.textContent = `Hours: 10:00am - 11:00pm`;

            txtAreaTwo.classList.add('txt');
            txtAreaTwo.textContent = `Phone Number: 555-555-555`;

            txtAreaThree.classList.add('txt');
            txtAreaThree.textContent = 'Email: fuud-manhattan@fUUdfUUd.gov';

            txtAreaFour.classList.add('txt');
            txtAreaFour.textContent = '';
        }
    });
}

siteStart()