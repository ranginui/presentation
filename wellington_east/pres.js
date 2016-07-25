$(function() {
	// Deck initialization
    $.extend(true, $.deck.defaults, {

      // other options (core or extensions)

     automatic: {
    startRunning: false,    // true or false
    cycle: false,           // true or false
    slideDuration: 30000 // duration in milliseconds
    }
    }
    );
	$.deck('.slide');
	
	$('#style-themes').change(function() {
		$('#style-theme-link').attr('href', $(this).val());
	});
	
	$('#transition-themes').change(function() {
		$('#transition-theme-link').attr('href', $(this).val());
	});
});

