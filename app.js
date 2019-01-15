const hero = document.querySelector('.hero');
const h1Text = document.querySelector('h1');

function updateTextShadow(e) {
    // console.log(e.x, e.y);
    const height = ((e.y - hero.offsetHeight/2) / hero.offsetHeight) * 70;
    const width = ((e.x - hero.offsetWidth/2) / hero.offsetWidth) * 70;
    h1Text.style.textShadow = `${width}px ${height}px red`;
    
}

hero.addEventListener('mousemove', updateTextShadow);