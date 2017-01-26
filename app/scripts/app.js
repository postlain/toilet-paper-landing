import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});
$('body').parallax({
	elements: [
		{
			selector: 'div.yellow',
			properties: {
				x: {
					'background-position-x': {
						initial: 0,
						multiplier: 0.1,
						invert: true
					}
				},
				y: {
					'background-position-y': {
						initial: 0,
						multiplier: 0.1,
						invert: true
					}
				}
			}
		},

		{
			selector: 'div.blue',
			properties: {
				x: {
					'background-position-x': {
						initial: 0,
						multiplier: 0.3
					}
				},
				y: {
					'background-position-y': {
						initial: 0,
						multiplier: 0.3
					}
				}
			}
		}
	]
});
