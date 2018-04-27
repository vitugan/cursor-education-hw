var applyLanguage = function (lang) {
	alert('now language is: ' + lang);
}

var getCurrentLanguage = function () {
    var defaultLanguage = 'ua';
    // return window.location.hash.substring(1) || defaultLanguage;
    return defaultLanguage;    
}

var currentLang = getCurrentLanguage();
var langEls = document.getElementsByClassName('lang-' + currentLang);

for (var i=0; i<langEls.length; i++) {
	var langEl = langEls[i];
	
  langEl.style.display = 'inline';
  langEl.classList.add('visible');
}

// $<prefix> == DOMElement
var $save = document.getElementById('save');

$save.addEventListener('click', function(){
    // var lang = document.getElementById('languages');
    var lang = document.getElementsByName('lang');
    // window.location.hash = lang.value;
    for(var i = 0; i < lang.length; i++){
        if(lang[i].checked === true){
            var lang = lang[i].value;
            window.location.hash = lang;
            console.log(lang)
        }
    }
    console.log(lang);
});