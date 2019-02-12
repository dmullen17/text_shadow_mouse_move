/* Select DOM elements */ 
const container = document.querySelector('.container');
const text = document.querySelector('h1');

/* Define Functions */ 
function textShadow(e) {
    console.log(e)
}

/* Set up event listeners */
container.addEventListener('mousemove', textShadow);


/*
const emoji = document.querySelector('#emoji');
emoji.innerText = String.fromCodePoint(0x1F355);
emoji.innerText += '😛';
*/