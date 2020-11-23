//Immadiatly Invoked Function Expretions (IIFE)
(function() {


    //declear variable
    const sliderImage = document.querySelectorAll(".imagesItem");
    const btn = document.querySelectorAll(".buttons");
    let count = 0;


    //for each function
    btn.forEach(function(buttons) {
        buttons.addEventListener("click", function() {
            if (buttons.classList.contains('next-btn')) {
                count++
                console.log(count)

                for (var i = 0; i < sliderImage.length; i++) {


                    if (count == i) {
                        sliderImage[i].classList.add("active");
                    } else {
                        sliderImage[i].classList.remove("active");
                    }

                    if (count == sliderImage.length) {
                        count = 0;
                        sliderImage[i].classList.add("active");
                    }

                }



            }
            if (buttons.classList.contains('prev-btn')) {
                count--
                console.log(count)

                for (var i = 0; i < sliderImage.length; i++) {


                    if (count == i) {
                        sliderImage[i].classList.add("active");
                    } else {
                        sliderImage[i].classList.remove("active");
                    }

                    if (count < 0) {
                        count = sliderImage.length - 1;
                    }

                }
            }
        })
    })



})();