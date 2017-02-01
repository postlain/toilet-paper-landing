import jq from 'jquery';

console.log('saf');
jq("#button-to-open").click(function () {
	console.log('sasdaf');
	jq("div.bitrix1").slideToggle("slow");
});
