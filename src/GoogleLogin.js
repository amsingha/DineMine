  
export const loadGoogleScript = () => {
  
    //loads the Google JavaScript Library
    (function () {
        const id = 'google-js';
        const src = 'https://apis.google.com/js/platform.js';
        
        //we have at least one script (React)
        const firstJs = document.getElementsByTagName('script')[0];
        
        //prevent script from loading twice
        if (document.getElementById(id)) { return; }
        const js = document.createElement('script'); 
        js.id = id;
        js.src = src;
        // We tell our code to run a globally available function named onGoogleScriptLoad after the Google API library loads properly. 
        // onGoogleScriptLoad is an arbitrarily-named function, and as such, can be named anything that you prefer. We shall use this function as an entry point for our React component, as we shall see later.
        js.onload = window.onGoogleScriptLoad; 
        firstJs.parentNode.insertBefore(js, firstJs);
    }());    
    
} 