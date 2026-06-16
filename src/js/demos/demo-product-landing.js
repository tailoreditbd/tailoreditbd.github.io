/*
Name: 			Product Landing
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	12.1.0
*/

(($ => {
    /*
	Quantity
	*/
    $('.quantity .plus').on('click',function(){
        const $qty=$(this).parents('.quantity').find('.qty');
        const currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });

    $('.quantity .minus').on('click',function(){
        const $qty=$(this).parents('.quantity').find('.qty');
        const currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });
})).apply( this, [ jQuery ]);