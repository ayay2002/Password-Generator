// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var length = prompt("Please enter desired password length")
console.log(length)
  var lowercase = confirm("Continue with lowercase letters?")
  console.log(lowercase)
  var uppercase = confirm("Continue with uppercase letters?")
  console.log(uppercase)
  var special = confirm("Contine with special characters?")
  console.log(special)
  var numbers = confirm("Continue with numbers?")
  console.log(numbers)

 if (lowercase || uppercase || special || numbers) {
  // if yes to any than generate password
  
 } else{
  // if none selected Alert none was selected
 }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
