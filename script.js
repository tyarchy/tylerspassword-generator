
// Assignment code here

//decide password length
//decide for upper or/and lower case letters
//decide for special character



// user enter page and clicks generate btn
// add event listener and build function
// user is prompted for password length
//prompt user for length of password
// prompt
// user is asked for character selections
// confirm is user wants upper, lower, num, special
// confirm
// random password is generated
// make a fucntion to place possible character to be selected from at random
//  randomly select characters from available option
// math.random
// random password is shown to user
// display built string using value

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//password variables

var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var ucalphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '0123456789'
var characters = '?*&^%$#@![].,';
var passwordLength
//function to determine password length

function decideLength() {

  passwordLength = prompt("Choose the length of your password, ( 8 - 128 characters )");

  if (passwordLength != typeof (Number) && passwordLength < 8 || passwordLength > 128) {
    alert("it has to be a number")
    decideLength()
  }

  return passwordLength;

}

function generatePassword() {
  var possibleCharacter = ""
  var finalPass = ''
  decideLength()
  var lowerConfirm = confirm("Do you want lower case characters?")
  var upperConfirm = confirm("Do you want upper case characters?")
  var specchars = confirm("you want special characters?")
  var nums = confirm("Do you want numbers")
  
  if (lowerConfirm == true) {
    possibleCharacter += alphabet
  }

  if (upperConfirm == true) {
    possibleCharacter += ucalphabet
  }

  if (specchars == true) {
    possibleCharacter += characters
  }

  if (nums == true){
    possibleCharacter += numbers
  }

  
  if((!lowerConfirm)&&(!upperConfirm)&&(!specchars))
  alert("Must choose at least one type, try again.");
  

  for (var i = 0; i <= passwordLength; i++) {

    var randomNumber = Math.floor(Math.random() * possibleCharacter.length);
    finalPass += possibleCharacter[randomNumber]

  }

  console.log(finalPass)
  return finalPass


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


