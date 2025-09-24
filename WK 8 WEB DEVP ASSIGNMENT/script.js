
// Global variable to track running animations
// Demonstrates global scope
let activeAnimations = {};
// Reusable function to start or stop animation on any element
// Parameters:
//   elementId (string) - ID of the element to animate
//   className (string) - CSS class that triggers animation
//   action (string) - 'start' or 'stop'
// Returns:
//   boolean - true if animation is running

function toggleAnimation(elementId, className, action) {
    const elem = document.getElementById(elementId); // local variable (function scope)
    if (!elem) return false;

    if (action === 'start') {
        elem.classList.add(className);
        activeAnimations[elementId] = true;
    } else if (action === 'stop') {
        elem.classList.remove(className);
        activeAnimations[elementId] = false;
    }

    return elem.classList.contains(className);
}

// Start/Stop handlers for box-two (purple box)

function startAnimation() {
    toggleAnimation('box-two', 'animate', 'start');
}

function stopAnimation() {
    toggleAnimation('box-two', 'animate', 'stop');
}

// Optional: reusable function for hovering effects
// Parameters: elementId, hoverClass

function addHoverEffect(elementId, hoverClass) {
    const elem = document.getElementById(elementId);
    if (!elem) return;

    elem.addEventListener('mouseenter', () => {
        elem.classList.add(hoverClass);
    });

    elem.addEventListener('mouseleave', () => {
        elem.classList.remove(hoverClass);
    });
}


// Keydown example to demonstrate event handling and function reuse
// =============================
function logKey(event) {
    console.log(`You pressed key: ${event.key}`);
}

const inputBox = document.getElementById('inputBox'); // ensure you have <input id="inputBox">
if (inputBox) {
    inputBox.addEventListener('keydown', logKey);
}


// Scope demonstration function
function scopeDemo() {
    let localVar = "I am local"; // local variable
    console.log("Inside function:", localVar);

    // Access global variable
    console.log("Global activeAnimations object:", activeAnimations);
}

scopeDemo();


// Example: start animations automatically for balls and heart
// This shows how you can trigger animations via JS for other elements

const autoStartElements = [
    { id: 'box-two', className: 'animate' }, // purple box
    // add more elements if needed
];

// Optionally start these animations
autoStartElements.forEach(el => toggleAnimation(el.id, el.className, 'start'));
