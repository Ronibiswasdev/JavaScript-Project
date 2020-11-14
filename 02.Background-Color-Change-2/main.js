// variable declare
const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ['red', 'green', 'black', 'pink', 'purple'];

body.style.backgroundColor = 'gray';

// Add Event
button.addEventListener("click", function() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
});

button.addEventListener("mouseenter", function() {
    const colorIndex = parseInt(Math.random() * colors.length)
    button.style.backgroundColor = colors[colorIndex]
});

button.addEventListener("mouseout", function() {
    const colorIndex = parseInt(Math.random() * colors.length)
    buttonColor = button.style.backgroundColor = colors[colorIndex]
});