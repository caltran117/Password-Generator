// links generator button to javascript
var generateBtn = document.querySelector("#generate");

// main function "writePassword" is linked to the subsidiary coding and connects to the html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// pop up to ask for character length
var password_length = Number(prompt("Choose a length of at least 8 characters and no more than 128 characters"));
// pop up to ask for type of character
var type = prompt("Enter type: lowercase, uppercase, numeric, or special characters")

// creates a index of the different character types to link to the for code for random generation
function generatePassword(){
  var newpassword = {
lowercase: "qwertyuiopasdfghjklzxcvbnm",
uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
numeric: "1234567890",
"special characters": "!@#$%^&*()_+=-`~\|][{};':,./?><:",
};

// links to the above type index. lower cases the prompt characters.
var newpassword = newpassword[type.toLocaleLowerCase()] || newpassword.lowercase;
var returnvalue = "";
// generates a random number based on the entered number by user
  for (let i = 0; i < password_length; i++) {
    returnvalue+=newpassword.charAt(Math.floor(Math.random()*newpassword.length))
  }
  // this creates the random generated code by returning the variable returnvalue
  return returnvalue
}

// links the button to the generate password function and the html
generateBtn.addEventListener("click", writePassword);
