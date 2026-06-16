/*
Name: 			Business Consulting 2
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	12.1.0
*/

(($ => {
    // Accordion
    $("[data-parent='#accordionServices']").on("click", function() {
		const trigger = $(this);
		$("#accordionServices .collapse.show").each(function() {
			if (trigger.attr("href") != ("#" + $(this).attr("id"))) {
				$(this).removeClass("show");
			}
		});
	});
})).apply( this, [ jQuery ]);