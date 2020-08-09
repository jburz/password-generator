// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Function to generate the password
function generatePassword() {
  var passLength = 0;
  //Error check to make sure password is between 8 and 128 characters
  do {
    passLength = prompt("Please choose a password length between 8 and 128 characters")
  }
  while (passLength < 8 || passLength > 128);

  //Variable to count remaining characters for random character generator
  var unusedChars = passLength;

  //Define character types and strings for prompts, initialize array for character types used (boolean) and character types added to new array
  var charTypes = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '1234567890', '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'];
  var charTypesPrompt = ['lower case letters', 'upper case letters', 'numbers', 'special characters'];
  var charTypesUsed = [];
  var charTypesAdded = [];

  //Error check to make sure user selects at least one type of character
  do {
    for (var i = 0; i < charTypesPrompt.length; i++) {
      charTypesUsed[i] = confirm("Would you like to use " + charTypesPrompt[i] + "?");
    }

    if (charTypesUsed[0] === false && charTypesUsed[1] === false && charTypesUsed[2] === false && charTypesUsed[3] === false) {
      alert("You must select at least one type of character for your password");
    }
  } while (charTypesUsed[0] === false && charTypesUsed[1] === false && charTypesUsed[2] === false && charTypesUsed[3] === false);

  //remove unused character strings from the array
  for (var i = 0; i < charTypes.length; i++) {
    if (charTypesUsed[i]) {
      charTypesAdded.push(charTypes[i]);
    }
  }

  //This algorithm generates a random number of characters for each character type selected in the prompts
  //Determines how many character types we have left to iterate through
  let counter = charTypesAdded.length - 1;

  //Total character we can still generate
  let charsRemaining = passLength;

  //Characters we can generate in current character type
  let ableToSelect = 0;

  //Number of characters generated in current character type
  let numChars = 0;

  //Array to concatenate all character types generated
  let concatChars = "";

  //Get a random number of characters for each character type selected up to the last one in the array
  for (var i = 0; i < charTypesAdded.length - 1; i++) {
    ableToSelect = charsRemaining - counter;
    counter--;
    numChars = getRandomIntInclusive(1, ableToSelect);
    charsRemaining -= numChars;

    //Store random characters in the added character item equal to the randomly generated length
    for (var j = 0; j < numChars; j++) {
      concatChars = concatChars.concat(charTypesAdded[i][Math.floor(Math.random() * charTypesAdded[i].length)]);
    }
  }

  //Generate characters in the final character type equal to the characters remaining
  numChars = charsRemaining;
  charsRemaining -= numChars;
  for (var j = 0; j < numChars; j++) {
    concatChars = concatChars.concat(charTypesAdded[charTypesAdded.length - 1][Math.floor(Math.random() * charTypesAdded[i].length)]);
  }

  //shuffle the final character string
  var shuffled = concatChars.split('').sort(function() {
    return 0.5-Math.random();
  }).join('');

  return shuffled;
}

//Get a random integer between two values that includes those values
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
