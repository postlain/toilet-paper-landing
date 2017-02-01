(function (w, d, u, b) {
	w['Bitrix24FormObject'] = b;
	w[b] = w[b] || function () {
			arguments[0].ref = u;
			(w[b].forms = w[b].forms || []).push(arguments[0]);
		};
	if (w[b]['forms']) return;
	const s = d.createElement('script');
	s.id = 'bx24_form_inline';
	s['data-skip-moving'] = "true";
	const r = 1 * new Date();
	s.async = 1;
	s.src = u + '?' + r;
	const h = d.getElementsByClassName('page')[0];
	h.appendChild(s);
})(window, document, 'https://anatolii.bitrix24.ru/bitrix/js/crm/form_loader.js', 'b24form');
b24form({
	"id": "10",
	"lang": "ru",
	"sec": "2aa9xi",
	"type": "inline"
});
