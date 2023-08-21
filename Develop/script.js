// Assignment code here
document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
  var length = getPasswordLength();
  var characterType = getCharacterTypes();

if (characterTypes.length === 0) {
  alert("Please select at least one character type.");
  return "";  
}

var password = "";

for (var i = 0; i < length; i++) {
  var characterType = characterTypes[Math.floor(Math.random() * characterTypes.length)];
password += characterType.getRandomCharacter();
}

return password;
}

function getPasswordLength() {
  var length = parseInt(prompt("Enter character length would you like your password to be (8-128 characters):"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter between 8 and 128 characters.");
    return getPasswordLength();
  }
  return length;
}

function getCharacterTypes(){
  var characterTypes = [];
  var length = document.getElementById("length").value;
  var includeLowercase = document.getElementById("lowercase").checked;
  var includeUppercase = document.getElementById("uppercase").checked;
  var includeNumeric = document.getElementById("numeric").checked;
  var includeSpecial = document.getElementById("special").checked;


  if (includeLowercase) {
    characterTypes.push("lowercase"); 
  }
  if (includeUppercase) {
    characterTypes.push("uppercase");
  }
  if (includeNumeric) {
    characterTypes.push("numeric");
  }
  if (includeSpecial) {
    characterTypes.push("special");
  }
  return characterTypes;
}
//get Random password characters
 function getRandomCharacters(type) {
  var characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*(){}[]=<>/,.",
   };

var characterSet = characters(type);
var randomIndex = Math.floor(Math.random() * characterSet.length);
return characterSet.charAt(randomIndex);
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
