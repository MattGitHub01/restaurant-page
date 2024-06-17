import './index.css';

import { homeBtn, menuBtn, aboutBtn } from './switch';

homeBtn()
menuBtn()
aboutBtn()
// Imports menu event listeners

function component() {
    const content = document.querySelector('.content');

    const contentImg = document.createElement('div');
    contentImg.classList.add('content-background');
    content.appendChild(contentImg);

    const h1Wrapper = document.createElement('div');
    h1Wrapper.classList.add('h1-wrapper');
    contentImg.appendChild(h1Wrapper);

    const nameTitle = document.createElement('h1');
    nameTitle.classList.add('title');
    nameTitle.textContent = `fÜdhaÜs NYC`;
    h1Wrapper.appendChild(nameTitle);
}

document.body.appendChild(component());