// Define variable
const btn = document.querySelector("#button");
const body = document.querySelector("body");
const hex_codes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const value = document.querySelector("#hexcode");

// Add Event

btn.addEventListener("click", function() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hex_codes.length)
        hex += hex_codes[index];
    }
    value.textContent = hex
    body.style.backgroundColor = hex
})