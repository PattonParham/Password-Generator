//generate password

var upperCase = prompt("Do you want uppercase letters in your password? Type 'Yes' or 'No' " ).toLowerCase() == "yes";
var lowerCase = prompt("Do you want lowercase letters in your password? Type 'Yes' or 'No' ").toLowerCase() == "yes";
var numericCharacters = prompt("Do you want numeric characters in your password? Type 'Yes' or 'No' ").toLowerCase() == "yes";
var specialCharacters = prompt("Do you want special characters in your password? Type 'Yes' or 'No' ").toLowerCase() == "yes";
var howLong = parseInt(prompt("How many characters long would you like your password to be? Type a number value between 8 and 128"));


var upperCasevalues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCasevalues = "abcdefghijklmnopqrstuvwxyz";
var Numericvalues = "0123456789";
var Specialvalues = "!@#$%^&*()_+-=?><,./{}[]|~";
function generatePass(){

    //set passlength
    
    //let complexity = document.getElementById("slider").value;
    var values = "";
    //possible password character values
    if(upperCase){
        values += upperCasevalues
    }

    if(lowerCase){
        values += lowerCasevalues
    }

    if(numericCharacters){
        values += Numericvalues
    }

    if(specialCharacters){
        values += Specialvalues
    }
    
    let password = ""
    
    //create for loop for the password characters
   //if(upperCase != null && lowerCase != null && numericCharacters != null && specialCharacters != null){
    for( var i = 0; i < howLong; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
   //     }
    //displaying the password in the designated text area
    document.getElementById("display").value = password
    }
    
    //set default length display
    document.getElementById("length").innerHTML = "Length: " + howLong;
    
    //function to set length from slider - no longer there - got it to work with a prompt :)
    

    
    //copy password to clipboard
    function copyPass(){
    
        document.getElementById("display").select();
    
        document.execCommand("Copy");
    
        alert("Password copied to clipboard");
    
    }