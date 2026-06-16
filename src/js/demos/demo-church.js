/*
Name: 			Church
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	12.1.0
*/

(($ => {
    /*
	* Validate
	*/
    if($('#contactFormMessage').get(0) ) {
		$('#contactFormMessage').validate({
			onkeyup: false,
			onclick: false,
			onfocusout: false,
			errorPlacement(error, element) {
				if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
					error.appendTo(element.parent().parent());
				} else {
					error.insertAfter(element);
				}
			}
		});
	}

    /*
	* Ajax on Page
	*/
    const ajaxOnPagePortfolioDetails = {

		pages: [],
		$ajaxBox: $('#galleryAjaxBox'),
		$ajaxBoxContent: $('#galleryAjaxBoxContent'),

		build() {

			const self = this;

			$('a[data-ajax-on-page]').each(function() {
				self.add($(this));
			});

			$(document).on('mousedown', 'a[data-ajax-on-page]', ev => {
				if (ev.which == 2) {
					ev.preventDefault();
					return false;
				}
			});

		},

		add($el) {

			const self = this, href = $el.attr('data-href');

			self.pages.push(href);

			$el.on('click', function(e) {
				e.preventDefault();
				self.show(self.pages.indexOf(href));

				// Remove active from all items
				$('a[data-ajax-on-page]').find('.thumb-info-wrapper').removeClass('active');

				// Set active current selected item
				$(this).find('.thumb-info-wrapper').addClass('active');
			});

		},

		events() {

			const self = this;

			// Carousel
			if ($.isFunction($.fn['themePluginCarousel'])) {

				$(() => {
					$('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').each(function() {
                        const $this = $(this);
                        let opts;

                        const pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
                        if (pluginOptions)
							opts = pluginOptions;

                        $this.themePluginCarousel(opts);
                    });
				});

			}

		},

		show(i) {

			const self = this;

			self.$ajaxBoxContent.empty();
			self.$ajaxBox.removeClass('ajax-box-init').addClass('ajax-box-loading');

			$('html, body').animate({
				scrollTop: self.$ajaxBox.offset().top - 100
			}, 300, 'easeOutQuad');

			// Ajax
			$.ajax({
				url: self.pages[i],
				complete({responseText}) {
				
					setTimeout(() => {

						self.$ajaxBoxContent.html(responseText);
						self.$ajaxBox.removeClass('ajax-box-loading');

						self.events();

					}, 1000);

				}
			});

		}

	};

    if($('#galleryAjaxBox').get(0)) {
		ajaxOnPagePortfolioDetails.build();
	}
})).apply( this, [ jQuery ]);