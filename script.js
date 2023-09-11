// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialList = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","~","`",".","<",">","?","/",";",":","'","[","]","{","}","|"]
var numbersList = ["1","2","3","4","5","6","7","8","9"]
function generatePassword() {
  var passwordList = []   
  var password =""                              
  var length = prompt("Please enter desired password length")
  if(length<8 || length>128){
    alert("Please select number between 8 and 128")
    return
  }
  console.log(length)
  var lowercase = confirm("Continue with lowercase letters?")
  console.log(lowercase)
  var uppercase = confirm("Continue with uppercase letters?")
  console.log(uppercase)
  var special = confirm("Contine with special characters?")
  console.log(special)
  var numbers = confirm("Continue with numbers?")
  console.log(numbers)
if  (lowercase){
  passwordList=passwordList.concat(lowercaseList)
}
if  (uppercase){
  passwordList=passwordList.concat(uppercaseList)
}
if  (special){
  passwordList=passwordList.concat(specialList)
}
if  (numbers){
  passwordList=passwordList.concat(numbersList)
}
console.log (passwordList)
  if (!lowercase && !uppercase && !special && !numbers) {
    // if yes to any than generate password
    window.alert("Please select Ok for one or more")
    return
  }
for(var i = 0; i<length;i++){
  password+=passwordList[Math.floor(Math.random()*passwordList.length)]
  console.log (password)
}console.log(password)
return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
