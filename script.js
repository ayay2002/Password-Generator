// these are the different characters the password wil choose from
var generateBtn = document.querySelector("#generate");
var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialList = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","~","`",".","<",">","?","/",";",":","'","[","]","{","}","|"]
var numbersList = ["1","2","3","4","5","6","7","8","9"]
// this is the funtion to make your password
function generatePassword() {
  var passwordList = []   
  var password =""                              
  var length = prompt("Please enter desired password length")
  if(length<8 || length>128){
    alert("Please select number between 8 and 128")
    return
  }
  // these are the questions it will ask you to make a password of your criteria
  var lowercase = confirm("Continue with lowercase letters?")
  var uppercase = confirm("Continue with uppercase letters?")
  var special = confirm("Contine with special characters?")
  var numbers = confirm("Continue with numbers?")
  // this is the if statement to defer your answers to make your password
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
// thnis if statement is to make sure you selected at least one of the options
  if (!lowercase && !uppercase && !special && !numbers) {
    // if yes to any than generate password
    window.alert("Please select Ok for one or more")
    return
  }
for(var i = 0; i<length;i++){
  password+=passwordList[Math.floor(Math.random()*passwordList.length)]
}
return password
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
