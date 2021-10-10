jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	// If this function exists...
    	if (this.setSelectionRange) {
      		// ... then use it (Doesn't work in IE)
      		// Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      		var len = $(this).val().length * 2;
      		this.setSelectionRange(len, len);
    	} else {
    		// ... otherwise replace the contents with itself
    		// (Doesn't work in Google Chrome)
      		$(this).val($(this).val());
    	}
	});
};    

$('.Search').on('click', () => {
	$('.Search').toggleClass('SearchClick');
	$('.SearchLine').toggleClass('hidden');
});

$('.Features').on('click', () => {
	$('.Features').toggleClass('FeaturesClick');
	$('.featuresList').toggleClass('hidden');
	$('.featuresList').toggleClass('none');
	$('#list').toggleClass('none');
	$('#arrow').toggleClass('none');
});

$('.Finish').on('click', () => {
	$('.dataset01').toggleClass('none');
	$('.dataset04').toggleClass('none');
	$('.dataset08').toggleClass('none');
});

$('.dataset01').on('click', () => {
	$('.dataset01').toggleClass('circleClick');
	$('.datasetSelect01').toggleClass('none');
});
$('.dataset02').on('click', () => {
	$('.dataset02').toggleClass('circleClick');
	$('.datasetSelect02').toggleClass('none');
});
$('.dataset03').on('click', () => {
	$('.dataset03').toggleClass('circleClick');
	$('.datasetSelect03').toggleClass('none');
});
$('.dataset04').on('click', () => {
	$('.dataset04').toggleClass('circleClick');
	$('.datasetSelect04').toggleClass('none');
});
$('.dataset05').on('click', () => {
	$('.dataset05').toggleClass('circleClick');
	$('.datasetSelect05').toggleClass('none');
});
$('.dataset06').on('click', () => {
	$('.dataset06').toggleClass('circleClick');
	$('.datasetSelect06').toggleClass('none');
});
$('.dataset07').on('click', () => {
	$('.dataset07').toggleClass('circleClick');
	$('.datasetSelect07').toggleClass('none');
});
$('.dataset08').on('click', () => {
	$('.dataset08').toggleClass('circleClick');
	$('.datasetSelect08').toggleClass('none');
});
$('.dataset09').on('click', () => {
	$('.dataset09').toggleClass('circleClick');
	$('.datasetSelect09').toggleClass('none');
});

//Плавная прокрутка
$('a[href*="#"]').on('click', function(e){
	$('html,body').animate({
		scrollTop: $($(this).attr('href')).offset().top - 100
	},500);
	e.preventDefault();
});