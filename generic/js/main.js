
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

    setTimeout(function(){ 
        console.log('now');
        sayText("Please put in your surname firstname and P N R number",2,1,3);
    }, 10000);     

})(jQuery);