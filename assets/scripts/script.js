// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Function to generate the password
function generatePassword() {
var passLength = 0;
  //Error check for upper and lower bound on password length
  do {
    passLength = prompt("Please choose a password length between 8 and 128 characters")
  }
  while (passLength < 8 || passLength > 128);

  //Define character types object and set bool to false and strings to define characters
  var charTypes = {
    lowerUsed: false,
    lowerStr: 'abcdefghijklmnopqrstuvwxyz',
    lowerCharCtr: 0,
    upperUsed: false,
    upperStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    upperCharCtr: 0,
    numsUsed: false,
    numsStr: '1234567890',
    numsCharCtr: 0,
    specialUsed: false,
    specialStr: ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~',
    specialCharCtr: 0,
  }


  //Error check to make sure user selects at least one type of character
  do {
    charTypes.lowerUsed = confirm("Would you like lowercase letters used?");
    charTypes.upperUsed = confirm("Would you like uppercase letters used?");
    charTypes.numsUsed = confirm("Would you like numbers used?");
    charTypes.specialUsed = confirm("Would you like special characters used?");

    if (charTypes.lowerUsed === false && charTypes.upperUsed === false && charTypes.numsUsed === false && charTypes.specialUsed === false) {
      alert("You must select at least one type of character for your password");
    }
  } while (charTypes.lowerUsed === false && charTypes.upperUsed === false && charTypes.numsUsed === false && charTypes.specialUsed === false);

  //Logic to generate password

  //Logic to determine how many of each type of character will be used
  //Set each character type to have at least one character in string if character type is used and increment total counter
  var currentCharCtr = 0;
  var charsLeft = passLength;
  if (charTypes.lowerUsed === true) {
    charTypes.lowerCharCtr = 1;
    currentCharCtr++;
  }
  if (charTypes.upperUsed === true) {
    charTypes.upperCharCtr = 1;
    currentCharCtr++;
  }
  if (charTypes.numsUsed === true) {
    charTypes.numsCharCtr = 1;
    currentCharCtr++;
  }
  if (charTypes.specialUsed === true) {
    charTypes.specialCharCtr = 1;
    currentCharCtr++;
  }

  charsLeft = charsLeft - currentCharCtr;
  
  //Get a random integer between two values that includes those values
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  //Generate a random number of lowercase characters
  getRandomIntInclusive(charTypes.lowerCharCtr,charsLeft);

  //Generate random character from each character type
  var lowerRand = Math.floor(Math.random() * charTypes.lowerStr.length);
  var upperRand = Math.floor(Math.random() * charTypes.upperStr.length);
  var numsRand = Math.floor(Math.random() * charTypes.numsStr.length);
  var specialRand = Math.floor(Math.random() * charTypes.specialStr.length);

  console.log(charTypes.lowerStr[lowerRand]);
  console.log(charTypes.upperStr[upperRand]);
  console.log(charTypes.numsStr[numsRand]);
  console.log(charTypes.specialStr[specialRand]);
  console.log(totalCharCtr);
  


  return "Generating your password....";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
