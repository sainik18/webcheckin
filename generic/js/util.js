
// avatar femal neutral
{/* 
<script type="text/javascript" src="//vhss-d.oddcast.com/vhost_embed_functions_v2.php?acc=6884526&js=1"></script>
<script type="text/javascript">AC_VHost_Embed(6884526,188,250,'',1,1, 2639279, 0,1,0,'caea1cecafb8dda7e56a3457fbd47d55',0);</script>
*/}

// avatar female smile
{/* 
<script type="text/javascript" src="//vhss-d.oddcast.com/vhost_embed_functions_v2.php?acc=6884526&js=1"></script>
<script type="text/javascript">AC_VHost_Embed(6884526,188,250,'',1,1, 2639276, 0,1,0,'671e6177041dc76f0b30745ac2a3d4b9',0);</script>
 */}

// avatar male newtral
{/* 
<script type="text/javascript" src="//vhss-d.oddcast.com/vhost_embed_functions_v2.php?acc=6884526&js=1"></script>
<script type="text/javascript">AC_VHost_Embed(6884526,188,250,'',1,1, 2639280, 0,1,0,'d4b0079046615cfa36cd3da70c01235c',0);</script>
*/}

// avatar male smile
{/* 
<script type="text/javascript" src="//vhss-d.oddcast.com/vhost_embed_functions_v2.php?acc=6884526&js=1"></script>
<script type="text/javascript">AC_VHost_Embed(6884526,188,250,'',1,1, 2639277, 0,1,0,'c163e06dd9dde82c7f143727673c853e',0);</script>
*/}

// only audio generic function female
$(function(){
    if ('speechSynthesis' in window) {
        
      $(document).on('mouseover', '.imagespeak', function(e) {
        var text = 'time.';
        //var text = "hello";
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[0];
        msg.rate = 10 / 10;
        msg.pitch = 1;
        msg.text = text;
  
        msg.onend = function(e, speechSynthesis) {
          console.log('Finished in ' + event.elapsedTime + ' seconds.');
          speechSynthesis.stop();
  
        };
  
        //speechSynthesis.speak(msg);
      })
    }
  });

//   display text

function displayText(msg, selector){
    $(selector).text(msg)
};

// PAGE 1

// only audio-female
$(function(){
    if ('speechSynthesis' in window) {
        
      $(document).ready(function() {
        var text = 'Please put in your surname firstname and P N R number';
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[0];
        msg.rate = 10 / 10;
        msg.pitch = 1;
        msg.text = text;
  
        msg.onend = function(e, speechSynthesis) {
          console.log('Finished in ' + event.elapsedTime + ' seconds.');
          speechSynthesis.stop();
  
        };

        setTimeout(function(){ 
            //speechSynthesis.speak(msg);
        }, 2000);
      })
    }
  });
// only audio-male

  $(function(){
    if ('speechSynthesis' in window) {
        
      $(document).ready(function() {
        var text = 'Please put in your surname firstname and P N R number';
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[8];
        msg.rate = 10 / 10;
        msg.pitch = 1;
        msg.text = text;
  
        msg.onend = function(e, speechSynthesis) {
          console.log('Finished in ' + event.elapsedTime + ' seconds.');
          speechSynthesis.stop();
  
        };

        setTimeout(function(){ 
            //speechSynthesis.speak(msg);
        }, 2000);
      })
    }
  });


//  avatar female audio on load in first page
setTimeout(function(){ 
    console.log('now');
    sayText("Please put in your surname firstname and P N R number",1,1,3);
}, 10000);

 //  avatar male audio on load in first page

setTimeout(function(){ 
    console.log('now');
    sayText("Please put in your surname firstname and P N R number",2,1,3);
}, 10000);     

// PAGE 2

// dynamic avatar audio for selecting seat

    // male avatar
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

    // female avatar
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

// dynamic avatar audio for meal selection

    // male
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
        stopSpeech();
        sayText(mealMessage,2,1,3);    
    });

    // female

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
        stopSpeech();
        sayText(mealMessage,1,1,3);    
    });

// simple audio for seat selection
        let genericSeatMessage = 'You have selected seat number ';
        let seatNumber;
        let seatType = ' that is window seat';
        let seatMessage;
        $('.seat-list li').click(function() {
            console.log('clicked me');
            $('.seat-list li img').css('border-color','gray');
            $(this).children('img').css('border-color','red');
            displayText(seatMessage, '#seat-select-message');
            seatNumber =  $(this).children('p').text();
            seatMessage = genericSeatMessage + seatNumber + seatType;   
        });
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[8];
        msg.rate = 10 / 10;
        msg.pitch = 1;
        msg.text = seatMessage;
  
        msg.onend = function(e, speechSynthesis) {
          console.log('Finished in ' + event.elapsedTime + ' seconds.');
          speechSynthesis.stop();
  
        };
        //speechSynthesis.speak(msg);

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
   
        });
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[8];
        msg.rate = 10 / 10;
        msg.pitch = 1;
        msg.text = mealMessage;

        msg.onend = function(e, speechSynthesis) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
        speechSynthesis.stop();

        };
        //speechSynthesis.speak(msg);

// baggage avatar audio
        // male
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
        });

        //female
        let extraWeight;
        let baggageGenericMsg = "You have requested for an excess baggage of ";
        let baggageMsg;
        $('#baggage-input').on('blur', function(){
            extraWeight = $(this).val();
            if($(this).val().trim() != "") {
                baggageMsg = baggageGenericMsg + extraWeight + ' kg';
                displayText(baggageMsg, '#baggage-select-message');
                stopSpeech();
                sayText(baggageMsg,1,1,3); 
            }
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
            }
            else{
                baggageMsg = '';
            }
           
        });
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[8];
        msg.rate = 10 / 10;
        msg.pitch = 1;
        msg.text = baggageMsg;

        msg.onend = function(e, speechSynthesis) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
        speechSynthesis.stop();

        };
        //speechSynthesis.speak(msg);

 // thank you message audio only
 let thankYou; 
 $('#submit-btn').click(function(){
     console.log('clicked');
     thankYou = 'Your boarding pass will be mailed to your Email Address. Thank you';
     msg.text = thankYou;

     msg.onend = function(e, speechSynthesis) {
     console.log('Finished in ' + event.elapsedTime + ' seconds.');
     speechSynthesis.stop();
 }
 //speechSynthesis.speak(msg); 
 });
 
//  avatar thankyou 

 $('#submit-btn').click(function(){
    let msg = 'Your boarding pass will be mailed to your Email Address. Thank you';
    stopSpeech();
    sayText(msg,2,1,3);  
})