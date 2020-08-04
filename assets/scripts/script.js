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
    lower: false,
    lowerStr: 'abcdefghijklmnopqrstuvwxyz',
    upper: false,
    upperStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    nums: false,
    numsStr: '1234567890',
    special: false,
    specialStr: ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~',
  }


  //Error check to make sure user selects at least one type of character
  do {
    charTypes.lower = confirm("Would you like lowercase letters used?");
    charTypes.upper = confirm("Would you like uppercase letters used?");
    charTypes.nums = confirm("Would you like numbers used?");
    charTypes.special = confirm("Would you like special characters used?");

    if (charTypes.lower === false && charTypes.upper === false && charTypes.nums === false && charTypes.special === false) {
      alert("You must select at least one type of character for your password");
    }
  } while (charTypes.lower === false && charTypes.upper === false && charTypes.nums === false && charTypes.special === false);

  //Logic to generate password

  //set character type arrays

  var lowerArr = ['a']
  console.log(charTypes.lower);
  console.log(charTypes.upper);
  console.log(charTypes.nums);
  console.log(charTypes.special);
  console.log(charTypes.specialStr.length);
  console.log(charTypes.numsStr.length);
  console.log(charTypes.upperStr.length);
  console.log(charTypes.lowerStr.length);

  return "Generating your password....";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
