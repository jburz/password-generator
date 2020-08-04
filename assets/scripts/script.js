// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Function to generate password


//Prompt for password length and character type


//Error checking for upper and lower length bounds and and least one character type selected


//Generate random characters for each character type selected - how to decide how many of each character type?


//Concatenate all characters in a random order - need array of characters


//Output array as string

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
