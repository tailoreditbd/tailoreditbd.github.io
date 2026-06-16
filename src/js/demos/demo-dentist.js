/*
Name:           Demo Dentist
Written by:     Okler Themes - (http://www.okler.net)
Theme Version:  12.1.0
*/

(($ => {
    const owlTestimonials = $('#textimonialsCarousel');

    owlTestimonials.on('initialized.owl.carousel', event => {

		if ($.isFunction($.fn['themePluginBeforeAfter'])) {

			$(() => {
				$('[data-plugin-before-after]:not(.manual)').each(function() {
                    const $this = $(this);
                    let opts;

                    const pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
                    if (pluginOptions)
						opts = pluginOptions;

                    $this.themePluginBeforeAfter(opts);
                });
			});

		}


	});

    owlTestimonials.owlCarousel({
		loop: false,
		responsive: {
			0: {
				items: 1
			},
			479: {
				items: 1
			},
			768: {
				items: 1
			},
			979: {
				items: 1
			},
			1199: {
				items: 1
			}
		},
		mouseDrag: false,
		touchDrag: false,
		nav: true,
		dots: false,
		navText: [],
		margin: 0,
		autoWidth: false,
		autoHeight: false,
		items: 1,
		rtl: ( $('html').attr('dir') == 'rtl' ) ? true : false
	});
})).apply( this, [ jQuery ]);
