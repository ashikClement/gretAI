const filled = document.querySelector('.filled');
const bulbFilled = document.querySelector('.bulb-filled')

window.addEventListener('scroll', () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = 100 - ((scrolled / scrollableHeight) * 100);
    filled.style.height = `${progress}%`;
    
    if (progress <= 40) {
        filled.style.background = `#ecca00`;
    } else if (progress <= 60) {
        filled.style.background = `#ec9b00`;
    } else if (progress <= 80) {
        filled.style.background = `#ec5300`;
    } else if (progress <= 100) {
        filled.style.background = `#ec2400`;
    }

    bulbFilled.style.background=filled.style.background
}); 