/*
Name: 			Hotel
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	12.1.0
*/

(($ => {
    // Slider
    $('#revolutionSlider').revolution({
		sliderType: 'standard',
		sliderLayout: 'fullwidth',
		delay: 5000,
		gridwidth: 1170,
		gridheight: 530,
		spinner: 'off',
		disableProgressBar: 'on',
		parallax:{
			type:"on",
			levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
			origo:"enterpoint",
			speed:400,
			bgparallax:"on",
			disable_onmobile:"off"
		},
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
			onHoverStop:"on",
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			bullets: {
				enable:true,
				hide_onmobile:true,
				hide_under:778,
				style:"uranus",
				tmp: '<span class="tp-bullet-inner"></span>',
				hide_onleave:false,
				direction:"horizontal",
				h_align:"center",
				v_align:"bottom",
				h_offset:0,
				v_offset:45,
				space:7
			}
		}
	});

    // Header
    const $headerWrapper = $('#headerBookNow');

    if( $(window).width() > 991 ) {
		$headerWrapper.on('mousedown', () => {
			$headerWrapper.addClass('open');
		});

		$(document).mouseup(({target}) => {
			if (!$headerWrapper.is(target) && $headerWrapper.has(target).length === 0 && !$(target).parents('.datepicker').get(0)) {
				$headerWrapper.removeClass('open');
			}
		});
	}

    // DatePicker
    $('#bookNowArrivalHeader').datepicker({
		defaultDate: '+1d',
		startDate: '+1d',
		autoclose: true,
		orientation: (($('html[dir="rtl"]').get(0)) ? 'bottom right' : 'bottom'),
		container: '#header',
		rtl: (($('html[dir="rtl"]').get(0)) ? true : false)
	});

    $('#bookNowDepartureHeader').datepicker({
		defaultDate: '+2d',
		startDate: '+2d',
		autoclose: true,
		orientation: (($('html[dir="rtl"]').get(0)) ? 'bottom right' : 'bottom'),
		container: '#header',
		rtl: (($('html[dir="rtl"]').get(0)) ? true : false)
	});

    $(document).scroll(() => {
		$('#bookNowArrivalHeader, #bookNowDepartureHeader').datepicker('hide').blur();
	});

    $('#bookNowArrival').datepicker({
		defaultDate: '+1d',
		startDate: '+1d',
		autoclose: true,
		orientation: (($('html[dir="rtl"]').get(0)) ? 'bottom left' : 'bottom left'),
		container: '#bookFormDetails',
		rtl: (($('html[dir="rtl"]').get(0)) ? true : false)
	});

    $('#bookNowDeparture').datepicker({
		defaultDate: '+2d',
		startDate: '+2d',
		autoclose: true,
		orientation: (($('html[dir="rtl"]').get(0)) ? 'bottom left' : 'bottom left'),
		container: '#bookFormDetails',
		rtl: (($('html[dir="rtl"]').get(0)) ? true : false)
	});

    // Book Form
    $('#bookFormHeader').validate({
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

    $('#bookForm').validate({
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
})).apply( this, [ jQuery ]);