$(document).ready(function(){
	/*Guara la altura entre la parte sup y menu*/
	var altura = $('.menu').offset().top;
	var altura2 = $('.header').offset().top;
	var altura_icono = $('.numero-section').offset().top;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura2){
			$('.header').addClass('menu-fixed');
		} else {
			$('.header').removeClass('menu-fixed');
		}
	});

	$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 40000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});



});