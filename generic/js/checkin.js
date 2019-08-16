
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

    // seat audio avatar
    let genericSeatMessage = 'You have selected seat number ';
    let seatNumber;
    let seatType = ' that is window seat';
    let seatMessage;
    $('.seat-list li').click(function() {
        console.log('clicked me');
        $('.seat-list li img').css('border-color','gray');
        $(this).children('img').css('border-color','red');
        seatNumber =  $(this).children('p').text();
        seatMessage = genericSeatMessage + seatNumber + seatType;
        displayText(seatMessage, '#seat-select-message');
        stopSpeech();
        sayText(seatMessage,2,1,3);    
    });

    // food audio avatar
    let genericMealMessage = 'You have selected a ';
    let mealType;
    let mealEndMsg = ' meal for this flight';
    let mealMessage;
    $('.meal-list li').click(function() {
        $('.meal-list li img').css('border-color','none');
        $(this).children('img').css('border-color','red');
        mealType =  $(this).children('p').text();
        mealMessage = genericMealMessage + mealType + mealEndMsg;
        displayText(mealMessage, '#meal-select-message');
        stopSpeech();
        sayText(mealMessage,2,1,3);    
    });

    // baggage audio avatar
    let extraWeight;
    let baggageGenericMsg = "You have requested for an excess baggage of ";
    let baggageMsg;
    $('#baggage-input').on('blur', function(){
        extraWeight = $(this).val();
        if($(this).val().trim() != "") {
            baggageMsg = baggageGenericMsg + extraWeight + ' kg';
            displayText(baggageMsg, '#baggage-select-message');
            stopSpeech();
            sayText(baggageMsg,2,1,3); 
        }
        else {
            
        }
       
    });

    // thank you message avatar
    $('#submit-btn').click(function(){
        let msg = 'Your boarding pass will be mailed to your Email Address. Thank you';
        stopSpeech();
        sayText(msg,2,1,3);  
    })


})(jQuery);