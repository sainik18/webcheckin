
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

    // text message
    // let genericSeatMessage = 'You have selected seat number ';
    // let seatNumber;
    // let seatType = ' that is window seat';
    // let seatMessage;
    // $('.seat-list li').click(function() {
    //     $('.seat-list li img').css('border-color','gray');
    //     $(this).children('img').css('border-color','red');
    //     seatNumber =  $(this).children('p').text();
    //     seatMessage = genericSeatMessage + seatNumber + seatType;
    //     displayText(seatMessage, '#seat-select-message'); 
    // });


    // if($(this).prop("checked") == true){
    //     alert("Checkbox is checked.");
    // }
    // else if($(this).prop("checked") == false){
    //     alert("Checkbox is unchecked.");
    // }
    
    // text message
    let genericSeatMessage = 'You have selected seat number ';
    let seatNumber;
    let seatMessage;
    $('.seat input').click(function() {
        seatNumber = $(this).siblings('label').text();
        $('.seat').children('input').prop('checked', false);
        $(this).prop('checked', true);
        seatMessage = genericSeatMessage + seatNumber;
        displayText(seatMessage, '#seat-select-message'); 
    });    

    // food text message
    let genericMealMessage = 'You have selected a ';
    let mealType;
    let mealEndMsg = ' meal for this flight';
    let mealMessage;
    $('.meal-list li').click(function() {
        $('.meal-list li img').css('border-color','gray');
        $(this).children('img').css('border-color','red');
        mealType =  $(this).children('p').text();
        mealMessage = genericMealMessage + mealType + mealEndMsg;
        displayText(mealMessage, '#meal-select-message');  
    });

    // baggage text message
    let extraWeight;
    let baggageGenericMsg = "You have requested for an excess baggage of ";
    let baggageMsg;
    $('#baggage-input').on('blur', function(){
        extraWeight = $(this).val();
        if($(this).val().trim() != "") {
            baggageMsg = baggageGenericMsg + extraWeight + ' kg';
            displayText(baggageMsg, '#baggage-select-message'); 
        }
        else {
            
        }
       
    });

    //assistance text message
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
    });

    $('#meal-submit-btn').on('click', function(){
        if(clickedRadio){
            $("#mainSection").load("baggage.html");
        }
    });

})(jQuery);