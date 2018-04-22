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
    console.log(key);
    key = key.toLowerCase;
    var version = navigatorMessageMap[key];
    
    // if (platform.indexOf(key)>=0){

    // }
}