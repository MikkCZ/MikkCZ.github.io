var l20n = function() {
	var langs = document.getElementById('langs').children;

	var setLang = function(lang) {
		if (!lang) {
			document.l10n.requestLanguages();
		} else {
			document.l10n.requestLanguages([lang]);
		}
		for (var i = 0; i < langs.length; i++) {
			var a = langs[i];
			while (a.nodeName.toLowerCase() !== 'a') {
				a = a.parentNode;
			}
			if (a.href.split('#')[1] == lang) {
				a.style.display = 'none';
			} else {
				a.style.display = 'inline';
			}
		}
	};

	var langClickListener = function(e) {	
		var a = e.target;
		while (a.nodeName.toLowerCase() !== 'a') {
			a = a.parentNode;
		}
		setLang(a.href.split('#')[1]);
	};

	for (var i = 0; i < langs.length; i++) {
		langs[i].addEventListener('click', langClickListener);
	}

    setLang(window.location.hash.split('#')[1] || navigator.languages[0]);
}

window.addEventListener('DOMContentLoaded', l20n);

