// variable declare
const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ['red', 'green', 'black', 'pink', 'purple'];

body.style.backgroundColor = 'gray';

// Event
button.addEventListener("click", function() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
});