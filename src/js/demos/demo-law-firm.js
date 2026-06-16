/*
Name: 			Law Firm
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	12.1.0
*/

(($ => {
    /*
	Combination Filters
	*/
    if($('#combinationFilters').get(0)) {

		$(window).on('load', () => {

			setTimeout(() => {

				const $grid = $('.portfolio-list').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					filter: '*',
					hiddenStyle: {
						opacity: 0
					},
					visibleStyle: {
						opacity: 1
					},
					stagger: 30,
					isOriginLeft: ($('html').attr('dir') == 'rtl' ? false : true)
				});

				const filters = {}, $loader = $('.sort-destination-loader');

				$('.filters').on('click', 'a', function(e) {
					
					e.preventDefault();
					
					const $this = $(this);

					const $buttonGroup = $this.parents('.portfolio-filter-group');
					const filterGroup = $buttonGroup.attr('data-filter-group');
					
					filters[filterGroup] = $this.parent().attr('data-option-value');
					
					const filterValue = concatValues(filters);
					
					$grid.isotope({
						filter: filterValue
					});
				});

				$('.portfolio-filter-group').each((i, buttonGroup) => {
					const $buttonGroup = $(buttonGroup);
					$buttonGroup.on('click', 'a', function() {
						$buttonGroup.find('.active').removeClass('active');
						$(this).parent().addClass('active');
						$(this).addClass('active');
					});
				});

				var concatValues = obj => {
					let value = '';
					for (const prop in obj) {
						value += obj[prop];
					}
					return value;
				}

				$(window).on('resize', () => {
					setTimeout(() => {
						$grid.isotope('layout');
					}, 300);
				});

				if ($loader) {
					$loader.removeClass('sort-destination-loader-showing');

					setTimeout(() => {
						$loader.addClass('sort-destination-loader-loaded');
					}, 500);
				}

			}, 1000);

		});

	}
})).apply( this, [ jQuery ]);
