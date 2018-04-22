var navigatorMessageMap = {
    'mac68k': 'macos',
    'macppc': 'macos',
    'macintel': 'macos',
    'iphone': 'macos',
    'ipad': 'macos',
    'ipod': 'macos',
    'win16': 'windows',
    'win32': 'windows'
}

var platform = navigator.platform.toLowerCase();

for(var key in navigatorMessageMap){    
    
    var version = navigatorMessageMap[key];
        
    if (platform === key){        
        var message = document.querySelectorAll('[data-version="'+version+'"]');        
        message[0].style.display = 'block';
    }
}