$("#open_search_form").click(function() {
	$("header .container .options ul li:last-child a p").slideToggle(0);
	$("#search_form").slideToggle(0);
    return false;
});
 
    // Slideshow
        
    $('#slideshow').DDSlider({
    
    nextSlide: '.flecha_izquierda',
    prevSlide: '.flecha_derecha',
    selector: '.seleccionar_diapositiva'
    
    });
 

    $(".slide_large").mouseenter(function() {
        $(".slide_large .flecha_izquierda").fadeIn("slow");   // Boton pulsado
        $(".slide_large .flecha_derecha").fadeIn("slow");   // Boton pulsado
    });

    $(".slide_large").mouseleave(function() {
        $(".slide_large .flecha_izquierda").fadeOut("slow");   // Boton pulsado
        $(".slide_large .flecha_derecha").fadeOut("slow");   // Boton pulsado
    });

   