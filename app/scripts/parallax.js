import $ from 'jquery';

$.fn.parallax = function(elems) {
	var height                 = $(window).height();
	var width                  = $(window).width();
	const parallax             = function(e, target, movementStrength) {
		var pageX = e.pageX - (width / 2);
		var pageY = e.pageY - (height / 2);
		var x     = (movementStrength / width) * pageX * -1 - 25;
		var y     = (movementStrength / height) * pageY * -1 - 50;
		target.offset({
			top :  y,
			left : x
		});
	};
	$('body').mousemove(function(e) {
		elems.forEach(function(elem) {
			parallax(e, elem.item, elem.strength);
		});
	});
};
