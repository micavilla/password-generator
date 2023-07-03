// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // prompt how many characters
  var charNum = window.prompt("How many characters would you like in your password?");
      
  if (charNum < 8 || charNum > 128) {
    window.alert("Invalid. Please select a number between 8 and 128.");
    return;
  }

  // var for charcters
  // What types of charactyers
  // special, number, upper, lower
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "/", ":", ";", "<", ">", ",", ".", "?"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  // window.confirm
  var yesLower = window.confirm("Would you like lowercase alphabetic characters in your password?");
  var yesUpper = window.confirm("Would you like uppercase alphabetic characters in your password?");
  var yesSpecial = window.confirm("Would you like special characters in your password?");
  var yesNumbers = window.confirm("Would you like numeric characters in your password?");

  // Use answers to make password
  // vars that include all possible charcters
  // seperate vars for each type, arrays
  var passwordChar = [];

  // take all true arrays and concat into new array
  if(yesLower){
    passwordChar = passwordChar.concat(lowerCase);
  }
  if(yesUpper){
    passwordChar = passwordChar.concat(upperCase);
  }
  if(yesSpecial){
    passwordChar = passwordChar.concat(special);
  }
  if(yesNumbers){
    passwordChar = passwordChar.concat(numbers);
  }

  // choose random chars from arr based on user input
  // var push into new array
  // var password = turn array into string .toString()
  var password = "";
  for(var i = 0; i < charNum; i++){
    var random = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[random];
  }
  // return password;
  return password;
}

// call function 
generatePassword();