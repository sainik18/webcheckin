
(function ($) {
    "use strict";

    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    });

    function displayText(msg, selector){
        $(selector).text(msg)
    };
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[8];
    msg.rate = 10 / 10;
    msg.pitch = 1;

    // simple audio for seat selection
    let genericSeatMessage = 'You have selected seat number ';
    let seatNumber;
    let seatMessage;
    $('.seat input').click(function() {
        seatNumber = $(this).siblings('label').text();
        $('.seat').children('input').prop('checked', false);
        $(this).prop('checked', true);
        seatMessage = genericSeatMessage + seatNumber;
        displayText(seatMessage, '#seat-select-message');
        msg.text = seatMessage;

        msg.onend = function(e, speechSynthesis) {
        speechSynthesis.stop();

        };
        //speechSynthesis.speak(msg);   
    });

    

// simple audio for meal selection
    let genericMealMessage = 'you have selected a ';
    let mealType;
    let mealEndMsg = ' meal for this flight';
    let mealMessage;
    $('.meal-list li').click(function() {
        $('.meal-list li img').css('border-color','gray');
        $(this).children('img').css('border-color','red');
        mealType =  $(this).children('p').text();
        mealMessage = genericMealMessage + mealType + mealEndMsg;
        displayText(mealMessage, '#meal-select-message');
        msg.text = mealMessage;
        msg.onend = function(e, speechSynthesis) {
        speechSynthesis.stop();
    
        };
        //speechSynthesis.speak(msg);   
    });
   

    // baggage simple audio
    let extraWeight;
    let baggageGenericMsg = "you have requested for an excess baggage of ";
    let baggageMsg;
    $('#baggage-input').on('blur', function(){
        extraWeight = $(this).val();
        if($(this).val().trim() != "") {
            baggageMsg = baggageGenericMsg + extraWeight + ' kg';
            displayText(baggageMsg, '#baggage-select-message');
            msg.text = baggageMsg;

            msg.onend = function(e, speechSynthesis) {
            speechSynthesis.stop();

    };
    //speechSynthesis.speak(msg);
        }
        else{
            baggageMsg = '';
        }
    
    });
 
        //assistance simple auidio  message
        let genericAssistanceMessage = 'You have selected ';
        let assistanceType;
        let assistanceEndMess = ' for assistance';
        let assistanceMessage;
        let clickedRadio = false;
        $(".radio input").click(function(){
            assistanceType = $("input[name='assistance']:checked").val();
            assistanceMessage = genericAssistanceMessage + assistanceType + assistanceEndMess;
            clickedRadio = true;
            displayText(assistanceMessage, '#assistance-select-message');
            msg.text = assistanceMessage;

            msg.onend = function(e, speechSynthesis) {
            speechSynthesis.stop(); 
            }
            //speechSynthesis.speak(msg); 
        });

        $('#meal-submit-btn').on('click', function(){
            if(clickedRadio){
                $("#mainSection").load("baggage.html");
            }
        });
    

})(jQuery);