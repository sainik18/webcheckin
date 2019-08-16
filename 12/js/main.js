
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
    });

    $(document).ready(function(){
        console.log('hello');
        setTimeout(function(){ 
            sayText("Please put in your surname firstname and P N R number",1,1,3);
        }, 10000); 
    }); 

})(jQuery);