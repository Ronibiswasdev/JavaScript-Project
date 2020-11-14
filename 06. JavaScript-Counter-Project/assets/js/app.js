//Immadiatly Invoked Function Expression (IIFE)
(function() {

    const buttons = document.querySelectorAll('.counterBtn');
    let count = 0


    //For each function
    buttons.forEach(function(button) {
        //add event
        button.addEventListener('click', function() {
            if (button.classList.contains('prevBtn')) {
                count--
            } else if (button.classList.contains('nextBtn')) {
                count++
            }
            //select count text
            const counter = document.querySelector('#counter')
            counter.textContent = count;

            if (count > 0) {
                counter.style.color = 'green';
            } else if (count < 0) {
                counter.style.color = 'red';
            } else {
                counter.style.color = 'white';
            }
        })
    });

})();