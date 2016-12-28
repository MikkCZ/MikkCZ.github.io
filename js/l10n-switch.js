if (typeof l10nswitch === "undefined") {
    var l10nswitch = {};
}

l10nswitch.L10Nswitch = function() {
    this._langs = this._addLangs();
    this._setLang(window.location.hash.split('#')[1]);
}

l10nswitch.L10Nswitch.prototype._addLangs = function() {
    var langsDiv = document.createElement('div');
    langsDiv.id = 'langs';
    this._addLang(langsDiv, 'en', 'english');
    this._addLang(langsDiv, 'cs', 'czech');

    var header = document.body.getElementsByTagName('header')[0];
    header.insertBefore(langsDiv, header.firstChild);

    var langs = langsDiv.children;
    this._addLangClickListener(langs);
    return langs;
}

l10nswitch.L10Nswitch.prototype._addLang = function(langsDiv, lang, l10nID) {
    var flag = document.createElement('img');
    flag.src = 'images/'+lang+'.jpg';

    var link = document.createElement('a')
    link.href = '#'+lang;
    link.setAttribute('data-l10n-id', l10nID);
    link.appendChild(flag);

    langsDiv.appendChild(link);
}

l10nswitch.L10Nswitch.prototype._addLangClickListener = function(langs) {
    var thisLangClickListener = this._langClickListener.bind(this);
    for (var i = 0; i < langs.length; i++) {
        langs[i].addEventListener('click', thisLangClickListener);
    }
}

l10nswitch.L10Nswitch.prototype._langClickListener = function(e) {
    var a = e.target;
    while (a.nodeName.toLowerCase() !== 'a') {
        a = a.parentNode;
    }
    this._setLang(a.href.split('#')[1]);
}

l10nswitch.L10Nswitch.prototype._setLang = function(lang) {
    if (!lang) {
        document.l10n.requestLanguages();
        lang = navigator.languages[0];
    } else {
        document.l10n.requestLanguages([lang]);
    }
    for (var i = 0; i < this._langs.length; i++) {
        var a = this._langs[i];
        while (a.nodeName.toLowerCase() !== 'a') {
            a = a.parentNode;
        }
        if (a.href.split('#')[1] == lang) {
            a.style.display = 'none';
        } else {
            a.style.display = 'inline';
        }
    }
}

window.addEventListener('DOMContentLoaded', function() {
    new l10nswitch.L10Nswitch();
});

