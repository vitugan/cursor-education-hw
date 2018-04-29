var applyLanguage = function (lang) {       
    var langEls = document.getElementsByClassName('lang');    
    for (var i=0; i<langEls.length; i++) {        
        var langEl = langEls[i];        
        if(langEl.classList.contains('lang-' + lang)){            
            langEl.classList.add('visible');
        } else {            
            langEl.classList.remove('visible');
        }
    }
}

var setLanguageInput = function(lang){
    var inputEls = document.querySelectorAll("[name='lang']");
    for(inputEl of inputEls){
        if(inputEl.value === lang){
            inputEl.checked = true;
        } else {
            inputEl.checked = false;
        }
    }    
}

var getCurrentLanguage = function () {
    var defaultLanguage = 'ua';
    return window.location.hash.substring(1) || defaultLanguage;    
}
var $username = document.getElementById('username');
var username = prompt('Enter your name');
if(username === ""){
    username = 'username';
} 
$username.innerHTML = username;

var currentLang = getCurrentLanguage();
var langEls = document.getElementsByClassName('lang-' + currentLang);

applyLanguage(currentLang);
setLanguageInput(currentLang);

// $<prefix> == DOMElement
var $save = document.getElementById('save');

$save.addEventListener('click', function(){    
    var lang = document.getElementsByName('lang');
    
    for(var i = 0; i < lang.length; i++){
        if(lang[i].checked === true){            
            lang = lang[i].value;                                   
            applyLanguage(lang);
            window.location.hash = lang;
        }
    }
});