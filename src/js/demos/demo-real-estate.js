/*
Name: 			RealEstate
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	12.1.0
*/

/*
Header
*/

// Search Properties
const $headerWrapper = $('#headerSearchProperties'), $window = $(window);

$headerWrapper.on('click', () => {
	if ($window.width() > 992) {
		$headerWrapper.addClass('open');
	}
});

$(document).mouseup(({target}) => {
	if (!$headerWrapper.is(target) && $headerWrapper.has(target).length === 0) {
		$headerWrapper.removeClass('open');
	}
});

$('#propertiesFormHeader').validate({
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

// Thumb Gallery
const $thumbGalleryDetail1 = $('#thumbGalleryDetail');

const $thumbGalleryThumbs1 = $('#thumbGalleryThumbs');
let flag = false;
const duration = 300;

$thumbGalleryDetail1
	.owlCarousel({
		items: 1,
		margin: 10,
		nav: true,
		dots: false,
		loop: false,
		navText: [],
		rtl: ( $('html').attr('dir') == 'rtl' ) ? true : false
	})
	.on('changed.owl.carousel', ({item}) => {
		if (!flag) {
			flag = true;
			$thumbGalleryThumbs1.trigger('to.owl.carousel', [item.index-1, duration, true]);
			flag = false;
		}
	});

$thumbGalleryThumbs1
	.owlCarousel({
		margin: 15,
		items: 4,
		nav: false,
		center: false,
		dots: false,
		rtl: ( $('html').attr('dir') == 'rtl' ) ? true : false
	})
	.on('click', '.owl-item', function() {
		$thumbGalleryDetail1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
	})
	.on('changed.owl.carousel', ({item}) => {
		if (!flag) {
			flag = true;
			$thumbGalleryDetail1.trigger('to.owl.carousel', [item.index, duration, true]);
			flag = false;
		}
	});
