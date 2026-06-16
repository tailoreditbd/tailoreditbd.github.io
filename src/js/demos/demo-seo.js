/*
Name: 			SEO
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	12.1.0
*/

(($ => {
    /*
    SVG Morphing
    */
    setTimeout(() => {
		if( $('#shape_one_start').get(0) ) {
			const shape1 = KUTE.fromTo('#shape_one_start', {
				path: '#shape_one_start' 
			}, { 
				path: '#shape_one_end' 
			}, {
				duration: 10000,
				easing	: 'easingQuadraticInOut',
				repeat: 20,
				repeatDelay: 1000,
				yoyo: true
			}).start();
		}

		if( $('#shape_two_start').get(0) ) {
			const shape2 = KUTE.fromTo('#shape_two_start', {
				path: '#shape_two_start' 
			}, { 
				path: '#shape_two_end' 
			}, {
				duration: 10000,
				easing	: 'easingQuadraticInOut',
				repeat: 20,
				repeatDelay: 1000,
				yoyo: true
			}).start();
		}
	}, 100);

    /*
	Form
	*/
    $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		mainClass: 'my-mfp-zoom-in',
		callbacks: {
			open() {
				$('html').addClass('lightbox-opened');
			},
			close() {
				$('html').removeClass('lightbox-opened');
			}
		}
	});
})).apply( this, [ jQuery ]);