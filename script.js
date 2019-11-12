//generate password

function generatePass(){

    //set passlength
    
    let complexity = document.getElementById("slider").value;
    
    //possible password character values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=?><,./{}[]|~";
    
    let password = ""
    
    //create for loop for the password characters
    
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    
    //displaying the password in the designated text area
    document.getElementById("display").value = password
    }
    
    //set default length display
    document.getElementById("length").innerHTML = "Length: 64";
    
    //function to set length from slider
    
    document.getElementById("slider").oninput = function(){
    
    if (document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length " + document.getElementById("slider").value;
    }
    
    
    else{ document.getElementById("length").innerHTML = "Length: 8"
    
    }
    
    }
    
    //copy password to clipboard
    function copyPass(){
    
        document.getElementById("display").select();
    
        document.execCommand("Copy");
    
        alert("Password copied to clipboard");
    
    }