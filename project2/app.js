const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 300; //100px

function shadow(e) {
    // console.log(e);
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;
    //console.log(x, y);
    
    // console.log(this, e.target); // we can see that this is usually the hero div, but if we hover over h1 that becomes the target
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
    const xWalk = Math.round((x / width) * walk - (walk / 2));
    const yWalk = Math.round((y / height) * walk - (walk / 2));
    
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 magenta,
        ${-xWalk}px ${-yWalk}px 0 lime,
        ${yWalk}px ${xWalk}px 0 cyan,
        ${-yWalk}px ${xWalk}px 0 yellow
                            `;

} 

hero.addEventListener('mousemove', shadow);