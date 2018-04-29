(function(w, d){        
    
    var userForm = d.createElement('form'); 

    var input_age       = createElWithAttrs('input', {'type': 'text', 'name': 'login', 'placeholder': 'Age'});
    var input_username  = createElWithAttrs('input', {'type': 'text', 'name': 'username', 'placeholder': 'User name'});
    var input_date      = createElWithAttrs('input', {'type': 'text', 'name': 'date', 'placeholder': 'Date'});
    var input_button    = createElWithAttrs('input', {'type': 'submit', 'value': 'Validate Me', });    
    
    

    userForm.appendChild(input_age); 
    userForm.appendChild(input_username);    
    userForm.appendChild(input_date);    
    userForm.appendChild(input_button);
    d.body.insertAdjacentElement('afterbegin', userForm);
    userForm.addEventListener('submit', validate);

    function createElWithAttrs(tag, attrs){
        var _el = d.createElement(tag);
        for(var key in attrs) {
            _el.setAttribute( key, attrs[key]);        
        }      

        return _el;
    }
    
    function validate(e){
        e.preventDefault();
        var re_age = /^[0-9]+$/;
        var re_username = /^user_[A-z0-9]+/;        
        var re_date = /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/;

        if( !re_date.test(input_date.value) || !re_age.test(input_age.value) || !re_username.test(input_username.value )){
           alert("your data is invalid");
        } 

        return false;
    } 

    
}(window, document));