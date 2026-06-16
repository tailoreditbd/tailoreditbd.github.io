/*
Name: 			Resume
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	12.1.0
*/

(($ => {
    // About Me
    $('#aboutMeMoreBtn').on('click', function() {
		$(this).hide();
		$('#aboutMeMore').toggleClass('about-me-more-visible');
		return false;
	});

    /*
	* Timeline
	*/
    const timelineHeightAdjust = {
		$timeline: $('#timeline'),
		$timelineBar: $('#timeline .timeline-bar'),
		$firstTimelineItem: $('#timeline .timeline-box').first(),
		$lastTimelineItem: $('#timeline .timeline-box').last(),

		build() {
			const self = this;

			self.adjustHeight();
		},
		adjustHeight() {
			const self                = this, calcFirstItemHeight = self.$firstTimelineItem.outerHeight(true) / 2, calcLastItemHeight  = self.$lastTimelineItem.outerHeight(true) / 2;

			// Set Timeline Bar Top and Bottom
			self.$timelineBar.css({
				top: calcFirstItemHeight,
				bottom: calcLastItemHeight
			});
		}
	};

    if( $('#timeline').get(0) ) {
		setTimeout(() => {
			// Adjust Timeline Height On Resize
			$(window).afterResize(() => {
				timelineHeightAdjust.build();
			});
		}, 1000);

		timelineHeightAdjust.build();
	}

    /*
	* Header Image Anim
	*/
    let lastScrollTop = 0;

    $(window).on('scroll', function(){
	   const st = $(this).scrollTop();
	   
	   if (st > lastScrollTop){
	   		$('img[custom-anim]').css({
	   			transform: 'translate(0, -'+ st +'px)'
	   		});
	   } else {
	      $('img[custom-anim]').css({
	   			transform: 'translate(0, '+ -Math.abs(st) +'px)'
	   		});
	   }
	   lastScrollTop = st;
	});
})).apply( this, [ jQuery ]);