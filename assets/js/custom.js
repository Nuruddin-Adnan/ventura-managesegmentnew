// identification item chagne 
function identificationFilename(inputItems, areaToShow){
    const inpputName = document.querySelectorAll(inputItems);
    const targetArea = document.querySelector(areaToShow);
    [...inpputName].forEach((input) => {
        input.addEventListener('change', function(e){
            targetArea.value = e.target.value;
        })
    })
}

// call the function identification;
identificationFilename('input[name=nominee-identification-1]', '#nominee-identification-item-1');
identificationFilename('input[name=nominee-identification-2]', '#nominee-identification-item-2');
identificationFilename('input[name=nominee-guardian-identification-1]', '#nominee-guardian-identification-item-1');
identificationFilename('input[name=nominee-guardian-identification-2]', '#nominee-guardian-identification-item-2');
// call function ends;



// input type password to text ************
function showPassword(inputClass){
    const input = document.querySelector(inputClass);
    if (input.type === "password") {
       input.type = "text";
    } else {
       input.type = "password";
    }
}


// ################# password validation start #################
{
    let password = document.querySelector('.password-input');
    let confirmPassword = document.querySelector('.confirm-password-input');


    let validPassword = {
      charLength: document.querySelector('.valid-password .length'),
      lowercase: document.querySelector('.valid-password .lowercase'),
      uppercase: document.querySelector('.valid-password .uppercase'),
      number: document.querySelector('.valid-password .number'),
      special: document.querySelector('.valid-password .special')
    };
        
    let pattern = {
      
      charLength: function() {
        if( password.value.length >= 8 && password.value.length <= 16 ) {
          return true;
        }
      },
      
      lowercase: function() {
        let regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern
        if( regex.test(password.value) ) {
          return true;
        }
      },
      
      uppercase: function() {
        let regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern
        if( regex.test(password.value) ) {
          return true;
        }
      },
      
      number: function() {
        let regex = /^(?=.*[0-9]).+$/; // Number check
        if( regex.test(password.value) ) {
          return true;
        }
      },
      
      special: function() {
        let regex = /^(?=.*[_\W]).+$/; // Special character 
        if( regex.test(password.value) ) {
          return true;
        }
      }   
        };
        
    // Listen for keyup action on password field
    password.addEventListener('keyup', function (){
      patternTest( pattern.charLength(), validPassword.charLength );
      patternTest( pattern.lowercase(), validPassword.lowercase );
      patternTest( pattern.uppercase(), validPassword.uppercase );
      patternTest( pattern.number(), validPassword.number );
      patternTest( pattern.special(), validPassword.special );
        
      // Check that all requirements are fulfilled
      if( hasClass(validPassword.charLength, 'valid') &&
         hasClass(validPassword.lowercase, 'valid') && 
         hasClass(validPassword.uppercase, 'valid') && 
         hasClass(validPassword.number, 'valid') &&
         hasClass(validPassword.special, 'valid')
        ) {
        addClass(password.parentElement, 'valid');
        removeClass(password.parentElement, 'invalid');
      }
      else {
        removeClass(password.parentElement, 'valid');
        addClass(password.parentElement, 'invalid');
      }

     //Add check or crose icon
      checkPasswordValidationComplete();

      //confirm password validation with check or cross icon
      confirmPasswordValidation();
    });


    // Listen for keyup action on confirm password field
    confirmPassword.addEventListener('keyup', function(){
        confirmPasswordValidation();
    });
    
    
    // Pattern Test function
    function patternTest(pattern, response) {
      if(pattern) {
        addClass(response, 'valid');
        removeClass(response, 'invalid');
      }
      else {
        removeClass(response, 'valid');
        addClass(response, 'invalid');
      }
    }
    
    // Has Class Function 
    function hasClass(el, className) {
      if (el.classList) {
        return el.classList.contains(className);    
      }
      else {
        new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className); 
      }
    }
        
    // Add Class Function
    function addClass(el, className) {
      if (el.classList) {
        el.classList.add(className);
      }
      else {
        el.className += ' ' + className;
      }
    }
      
    // Remove Class Function
    function removeClass(el, className) {
      if (el.classList)
        el.classList.remove(className);
      else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
        
    // password validation-check-complete
    function checkPasswordValidationComplete(){
        let validationCheckIcon =  document.querySelector('.validation-check-icon');
        let validationCrossIcon =  document.querySelector('.validation-cross-icon');

        // Check that all requirements are fulfilled
        if( hasClass(validPassword.charLength, 'valid') &&
            hasClass(validPassword.lowercase, 'valid') && 
            hasClass(validPassword.uppercase, 'valid') && 
            hasClass(validPassword.number, 'valid') &&
            hasClass(validPassword.special, 'valid')
        ) {
            addClass(validationCheckIcon, 'valid');
            removeClass(validationCheckIcon, 'invalid');
            addClass(validationCrossIcon, 'invalid');
            removeClass(validationCrossIcon, 'valid');
        }
        else {
            addClass(validationCheckIcon, 'invalid');
            removeClass(validationCheckIcon, 'valid');
            addClass(validationCrossIcon, 'valid');
            removeClass(validationCrossIcon, 'invalid');
        }
    }

    // confirm password validation
    function confirmPasswordValidation(){
        let confirmValidationCheckIcon =  document.querySelector('.confirm-validation-check-icon');
        let confirmValidationCrossIcon =  document.querySelector('.confirm-validation-cross-icon');

        if(password.value === confirmPassword.value){
            addClass(confirmValidationCheckIcon, 'valid');
            removeClass(confirmValidationCheckIcon, 'invalid');
            addClass(confirmValidationCrossIcon, 'invalid');
            removeClass(confirmValidationCrossIcon, 'valid');
        }
        else {
            addClass(confirmValidationCheckIcon, 'invalid');
            removeClass(confirmValidationCheckIcon, 'valid');
            addClass(confirmValidationCrossIcon, 'valid');
            removeClass(confirmValidationCrossIcon, 'invalid');
        }
    }

    

}
// ################# end of password validation #################