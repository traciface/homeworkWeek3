// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//  }
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
 var allCharacters = [numericCharacters, specialCharacters, lowerCasedCharacters, upperCasedCharacters]
;

function getRandomAmount(max, min) 
{ 
  return Math.random() * (max - min) + min; 
} 

var currentPassword = "";

var passLength = getRandomAmount (120 , 8) 
passLength= Math.round(passLength)

while (currentPassword.length < passLength)
{
  var randomIndex =  Math.floor(Math.random() * allCharacters.length)

  var randomArray = allCharacters[randomIndex]

  var chararterIndex = Math.floor(Math.random() * randomArray.length)


  currentPassword = currentPassword + randomArray[chararterIndex]
  console.log ("the random charater index is " + chararterIndex)

}

console.log (passLength)
console.log (currentPassword)

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
