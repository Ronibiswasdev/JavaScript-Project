//Immadiatly Invoked Function Expretions (IIFE)
(function() {

    const pictures = [
        'contBcg-0',
        'contBcg-1',
        'contBcg-2',
        'contBcg-3',
        'contBcg-4'
    ];

    //select both left and right button and add event listener
    const btn = document.querySelectorAll(".buttons");
    const imagesConteiner = document.querySelector(".imagesCont");
    const counterName = document.querySelector(".count");
    let counter = 0;

    //defalt show images
    imagesConteiner.setAttribute('src', 'assets/images/' + pictures[counter] + '.jpeg')
    counterName.textContent = pictures[counter];



    btn.forEach(function(button) {
        button.addEventListener("click", function() {
            if (button.classList.contains("prev-btn")) {
                counter--
                if (counter < 0) {
                    counter = pictures.length - 1
                }
                imagesConteiner.setAttribute('src', 'assets/images/' + pictures[counter] + '.jpeg')

            }

            if (button.classList.contains("next-btn")) {
                counter++
                if (counter >= pictures.length) {
                    counter = 0;
                }
                imagesConteiner.setAttribute('src', 'assets/images/' + pictures[counter] + '.jpeg')
            }
            counterName.textContent = pictures[counter];
        })
    })









})();