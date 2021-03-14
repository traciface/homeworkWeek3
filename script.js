// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 }
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



function generatePassword ()
{
  var allCharacters = []

  var checkSpecial = document.getElementById("checkSpecial").checked;
  var checkNumber = document.getElementById("checkNumber").checked;
  var checkUpper = document.getElementById("checkUpper").checked;
  var checkLower = document.getElementById("checkLower").checked;
  var passLength = document.getElementById("passLength").value


  if (
    checkSpecial === false &&
    checkNumber === false &&
    checkLower === false &&
    checkUpper === false
) 
{
    alert ("Please select at least one type");
    return;
}

if (checkSpecial === true)
    {allCharacters.push (specialCharacters)}

if (checkNumber === true)
    {allCharacters.push (numericCharacters)}

if (checkLower === true)
    {allCharacters.push (lowerCasedCharacters)}

if (checkUpper === true)
    {allCharacters.push (upperCasedCharacters)}



  var currentPassword = "";

  while (currentPassword.length < passLength)
  {
    var randomIndex =  Math.floor(Math.random() * allCharacters.length)
    var randomArray = allCharacters[randomIndex]
    var chararterIndex = Math.floor(Math.random() * randomArray.length)
    currentPassword = currentPassword + randomArray[chararterIndex]

  }
  return currentPassword
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getRandomAmount(max, min) 
{ 
  return Math.random() * (max - min) + min; 
} 