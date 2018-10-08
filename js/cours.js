$(function() {    
    
    
    $("img").on( 'mouseenter', function () {

   $(this).css('border', "3px black solid");
        $(this).css('opacity', '1');

});
    
    $("img").on( 'mouseleave', function () {

   $(this).css('border', "none");
         $(this).css('opacity', '0.5');

});
    
   $("img").on( 'mouseclick', function () {

   

});
    
    
});


$("#inpt_search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});
