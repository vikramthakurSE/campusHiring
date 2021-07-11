const typedTextSpan = document.querySelector(".typed-text");

const textArray = [`“Choose a job you love, and you will never have to work a day in your life." —Confucius`,
                ' “Work to become, not to acquire." —Elbert Hubbard',
                '“If opportunity does not knock, build a door"',
                '"The best way to predict the future is to create it." —Abraham Lincoln'];
const typingDelay = 150;
const erasingDelay = 50;
const newTextDelay = 4000;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        //erase
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        //type
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, typingDelay +500);
})