/*
Name:           Demo Marketing 1
Written by:     Okler Themes - (http://www.okler.net)
Theme Version:  12.1.0
*/

(($ => {
    gsap.registerPlugin(ScrollTrigger);

    /*
	Section Scale
	*/
    gsap.utils.toArray(".gsap-section-scale").forEach((section, index) => {
		const tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "100% 100%",
				end: "bottom top",
				scrub: true
			},
		});
	
		tl1.fromTo(
			section, {
				scale: 1,
			},
			{
				scale: 0.9,
				duration: 1,
				ease: "power2.out"
			}
		);
	});

    /*
	Image Change
	*/
    gsap.defaults({ overwrite: 'auto'});

    // Set up our scroll trigger
    const ST = ScrollTrigger.create({
		trigger: ".gsap-content-container",
		start: "top top",
		end: "bottom bottom",
		onUpdate: getCurrentSection
	});

    const contentMarkers = gsap.utils.toArray(".gsap-content-marker");

    // Set up our content behaviors
    contentMarkers.forEach(marker => {
		marker.content = document.querySelector(`#${marker.dataset.markerContent}`);

		marker.content.enter = () => {
			gsap.fromTo(marker.content, {
				autoAlpha: 0
			}, {
				duration: 0.3,
				autoAlpha: 1
			});
		}
	
		marker.content.leave = () => {
			gsap.to(marker.content, {
				duration: 0.1,
				autoAlpha: 0
			});
		}
	
	});

    // Handle the updated position
    let lastContent;

    function getCurrentSection() {
		let newContent;
		const currScroll = scrollY;

		// Find the current section
		contentMarkers.forEach(({offsetTop, content}) => {
			if (currScroll > (offsetTop - 100)) {
				newContent = content;
			}
		});
	
		// If the current section is different than that last, animate in
		if (newContent &&
			(lastContent == null ||
				!newContent.isSameNode(lastContent))) {
			// Fade out last section
			if (lastContent) {
				lastContent.leave();
			}
	
			// Animate in new section
			newContent.enter();
	
			lastContent = newContent;
		}
	
	}
})).apply( this, [ jQuery ]);
