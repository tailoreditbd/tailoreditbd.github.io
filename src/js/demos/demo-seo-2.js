/*
Name: 			SEO 2
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	12.1.0
*/

(($ => {
    /**
	 * Custom Simple Form Validation
	 *
	 */
    $('.custom-form-simple-validation').each(function(){
		$(this).validate({
			onkeyup: false,
			onclick: false,
			onfocusout: false,
			errorPlacement(error, element) {
				if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
					error.appendTo(element.closest('.form-group'));
				} else {
					error.insertAfter(element);
				}
			}
		});
	});
})).apply( this, [ jQuery ]);