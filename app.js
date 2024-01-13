const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Copywriter", "Junior Frontend Web Dev", "Junior UI/UX Designer", "Junior Backend Web Dev"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}
document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}
document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}

jQuery(document).ready(function ($) {
    $(document).keydown(function (event) {
        var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();

        if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
            alert('Sorry, This Functionality Has Been Disabled!');
            //disable key press porcessing
            return false;
        }
    });
});

document.onkeydown = function (e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
            e.keyCode === 86 ||
            e.keyCode === 85 ||
            e.keyCode === 117)) {

        return false;
    } else {
        return true;
    }
};

$(function () {
    $(document).keydown(function (objEvent) {
        if (objEvent.ctrlKey) {
            if (objEvent.keyCode == 65) {
                return false;
            }
        }
    });
});

