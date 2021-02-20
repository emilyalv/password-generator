// Assignment Code
var generateBtn = document.querySelector("#generate");

//generate password
function generatePassword (
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumeric,
    includeSpecial) {
    let characterOptions = []   

    let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
    let numeric = ["1", "2", "3", "4", "5", "6", "7","8","9","0",];
    let specialChar = ["!","#","@","$","%","^","&","*","(",")",];

    if (includeLowercase) {
        characterOptions = characterOptions.concat(lowercase)
    }
    if (includeUppercase) {
        characterOptions = characterOptions.concat(uppercase)
    }
    if (includeNumeric) {
        characterOptions = characterOptions.concat (numeric)
    }
    if (includeSpecial) {
        characterOptions = characterOptions.concat(specialChar)
    }

    let res = ""
    for (i=0; i<passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characterOptions.length)        
        res += characterOptions [randomIndex]
        }
    return res
        
    }

// Write password to the #password input
function writePassword() {
// //Prompt user for length between 8 and 128
var passwordLength = window.prompt ("Enter a password length between 8 and 128.")

//Prompt user for lowercase, uppercase, numeric, and/or special character
var includeLowercase = window.confirm ("Would you like to include lowerchase characters? Select confirm to include, cancel to exclude.");
var includeUppercase = window.confirm ("Would you like to include uppercase characters?")
var includeNumeric = window.confirm ("Would you like to include numeric characters?")
var includeSpecial = window.confirm ("Would you like to include special characters?")  

//Generate password
    var password = generatePassword(
        passwordLength, 
        includeLowercase, 
        includeUppercase, 
        includeNumeric,
        includeSpecial);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
