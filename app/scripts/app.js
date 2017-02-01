import svg4everybody from 'svg4everybody';
import $ from 'jquery';
require('./parallax.js');

window.onload = function () {
	require('./bitrix.js');
	require('./open-bitrix.js');
};

$(() => {
	svg4everybody();
});

