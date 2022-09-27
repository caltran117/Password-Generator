// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var newpassword= ""
  var character_list="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()"
  for (let i = 0; i < 10; i++) {
    newpassword+=character_list.charAt(Math.floor(Math.random()*character_list.length))
  }
  return newpassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
