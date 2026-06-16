/*
Name: 			Auto Services
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	12.1.0
*/

(($ => {
    /*
	* Datepicker
	*/

    // Fix datepicker issue when using body with margin (notice top bar)
    const datepicker = $.fn.datepicker;
    $.fn.datepicker = function(...args) {
        const result = datepicker.apply(this, args);

        this.on('show', function (e) {
            const $target = $(this);
            const $picker = $target.data('datepicker').picker;
            let top;

            if ($picker.hasClass('datepicker-orient-top')) {
                top = $target.offset().top - $picker.outerHeight() - parseInt($picker.css('marginTop'));
            } else {
                top = $target.offset().top + $target.outerHeight() + parseInt($picker.css('marginTop'));
            }

            $picker.offset({top});
        });

        return result;
    }

    // Initialize Datepickers on the page
    $('.custom-datepicker').each(function(){
		$(this).datepicker();
	});

    /*
	* Timepicker
	*/
    $('.custom-timepicker').each(function(){
		$(this).timepicker({
			disableMousewheel: true,
			icons: {
				up: 'fas fa-chevron-up',
				down: 'fas fa-chevron-down'
			}
		});
	});
})).apply( this, [ jQuery ]);