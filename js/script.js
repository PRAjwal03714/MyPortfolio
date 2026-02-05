const textElement = document.getElementById('typing-text');
const textOptions = [
    "DEPLOYING PRODUCTION AI PIPELINES",
    "BUILDING DISTRIBUTED DATA SYSTEMS",
    "ENGINEERING GRAPH & KNOWLEDGE SYSTEMS",
  ];
  let currentTextIndex = 0;
let currentCharIndex = 0;
let isErasing = false;

const typingSpeed = 60;  // Speed of typing (in milliseconds)
const erasingSpeed = 30; // Speed of erasing (in milliseconds)
const delayBetweenTextSwitch = 1000;  // Shorter delay before switching text after erasing

// Function to handle typing and erasing
function typeAndErase() {
    const currentText = textOptions[currentTextIndex];

    // If typing, add one character at a time
    if (!isErasing && currentCharIndex < currentText.length) {
        textElement.textContent += currentText[currentCharIndex];
        currentCharIndex++;
        setTimeout(typeAndErase, typingSpeed);
    }
    // If erasing, remove one character at a time
    else if (isErasing && currentCharIndex > 0) {
        textElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(typeAndErase, erasingSpeed);
    } else {
        // Switch between typing and erasing
        if (!isErasing) {
            isErasing = true;
            setTimeout(typeAndErase, delayBetweenTextSwitch); // Wait before erasing
        } else {
            isErasing = false;
            currentTextIndex = (currentTextIndex + 1) % textOptions.length; // Switch to next text
            setTimeout(typeAndErase, delayBetweenTextSwitch); // Shorter delay before typing next word
        }
    }
}

// Start the typing and erasing process as soon as the page loads
window.onload = function() {
    // Add fade-in effect on load
    document.body.style.opacity = 0;
    setTimeout(function() {
        document.body.style.transition = 'opacity 2s ease-in-out';
        document.body.style.opacity = 1;
    }, 100);

    typeAndErase();
};
