// Assignment Code
var generateBtn = document.querySelector("#generate");


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// <!-- WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters -->
prompt("Choose a length of at least 8 characters and no more than 128 characters" )

// <!-- WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters -->
prompt("Enter type: lowercase, uppercase, numeric, and/or special characters")
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var password_length = Number(prompt("Choose a length of at least 8 characters and no more than 128 characters"));
var type = prompt("Enter type: lowercase, uppercase, numeric, and/or special characters")

function generatePassword(){
  var newpassword = "";
 if(newpassword === "lowercase") {
  newpassword = "qwertyuiopasdfghjklzxcvbnm";
} else if (newpassword === "uppercase") {
  newpassword = "QWERTYUIOPASDFGHJKLZXCVBNM";
} else if (newpassword === "numerical") {
  newpassword = "1234567890";
} else if (newpassword === "special") {
  newpassword = "!@#$%^&*";
}

  for (let i = 0; i < password_length; i++) {
    newpassword+=character_list.charAt(Math.floor(Math.random()*character_list.length))
  }
  return newpassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
