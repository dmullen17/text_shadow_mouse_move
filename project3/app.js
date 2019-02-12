/* Select DOM elements */ 
const container = document.querySelector('.container');
const text = document.querySelector('h1');
const xOffsetMax = 30;
const yOffsetMax = 30;

/* Define Functions */ 
function textShadow(e) {
    // Get centered x and y coordinates
    const x = e.clientX - (container.offsetWidth/2 + container.offsetLeft);
    const y = e.clientY - (container.offsetHeight/2 + container.offsetTop);
    //console.log({x,y});
    // Convert to percentages
    const xPercent = (x / (container.offsetWidth / 2)).toFixed(2);
    const yPercent = (y / (container.offsetHeight / 2)).toFixed(2);
    const [xPixels, yPixels] = [xPercent * xOffsetMax, yPercent * yOffsetMax];
    container.style.textShadow = `${xPixels}px ${yPixels}px 0 red,
                                  ${-xPixels}px ${-yPixels}px 0 cyan,
                                  ${yPixels}px ${xPixels}px 0 magenta,
                                  ${-yPixels}px ${-xPixels}px 0 lime`;

}

/* Set up event listeners */
container.addEventListener('mousemove', textShadow);


/*
const emoji = document.querySelector('#emoji');
emoji.innerText = String.fromCodePoint(0x1F355);
emoji.innerText += '😛';
*/
//container.style.textShadow = '10px 10px 0px red';
