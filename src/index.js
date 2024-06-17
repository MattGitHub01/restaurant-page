import './style.css';

function component() {
    const content = document.getElementById('content');

    const nameTitle = document.createElement('h1');
    nameTitle.classList.add('name-title');
    nameTitle.textContent = `fÜdhaÜs NYC`;
    content.appendChild(nameTitle);

    const introTxt = document.createElement('p');
    introTxt.classList.add('intro-txt');
    introTxt.textContent = `fÜdhaÜs NYC is the newest three Michelin-starred top tier exclusive dining experience in the heart of Manhattan. Nestled dauntingly high atop One Vanderbilt in Midtown, it is the newest creation of celebrity chef Drake Knöpfnenfüdsensön. Reveal your hidden pallet and engage all your senses with "The Knopf"'s culinary mouth-child... fÜdhaÜs New York.`;
    content.appendChild(introTxt);
}

document.body.appendChild(component());