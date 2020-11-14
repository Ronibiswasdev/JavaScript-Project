//Immadiately Invoked Function Expression(IIFE)
(function() {
    //select the input element
    const form = document.querySelector('#message-form');
    //Add event
    form.addEventListener("submit", function(e) {
        //prevent the form's defalts submission action
        e.preventDefault();
        //define variable
        const message = document.querySelector("#message");
        const feedback = document.querySelector('.feedback');
        const messContent = document.querySelector('.message-content');

        if (message.value === '') {
            feedback.classList.add('show');
            setTimeout(function() {
                feedback.classList.remove('show')
            }, 2000)
        } else {
            //change the message content and clear the input
            messContent.textContent = message.value;
            message.value = '';
        }
    });
})();