
(function ($) {
    "use strict";
    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    // auio message-female  
    if ('speechSynthesis' in window) {			
        $(document).ready(function() {
            var text = 'Please put in your surname firstname and P N R number';
            var msg = new SpeechSynthesisUtterance();
            var voices = window.speechSynthesis.getVoices();
            msg.voice = voices[3];
            msg.rate = 10 / 10;
            msg.pitch = 0;
            msg.text = text;
    
            msg.onend = function(e, speechSynthesis) {
            console.log('Finished in ' + event.elapsedTime + ' seconds.');
            speechSynthesis.stop();
    
            };
            //speechSynthesis.speak(msg);
            // setTimeout(function(){ 
            //     speechSynthesis.speak(msg);
            // }, 2000);
            

        })
        };


})(jQuery);