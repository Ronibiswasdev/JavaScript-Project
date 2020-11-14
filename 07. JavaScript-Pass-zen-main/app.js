// Define variable
const btn = document.querySelector("button")
const tmp_show = document.querySelector("#tmpPass")
const value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F']
tmp_show.style.color = 'red'

// Add Event
btn.addEventListener("click", function() {
    let last_val = ''
    for (let i = 0; i < 8; i++) {

        const passIndex = Math.floor(Math.random() * value.length)
        last_val += value[passIndex];

    }
    tmp_show.textContent = last_val

})