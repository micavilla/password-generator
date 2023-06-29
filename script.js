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
  var length = window.prompt("How many characters would you like in your password?");
  // var intLength = parseInt(length);
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "/", ":", ";", "<", ">", ",", ".", "?"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  if (length < 8 || length > 128) {
    window.alert("Invalid. Please select a number between 8 and 128");
    return;
  }
    
  var lowerCase = window.confirm("Would you like lowercase alphabetic characters in your password?");
  var upperCase = window.confirm("Would you like uppercase alphabetic characters in your password?");
  var special = window.confirm("Would you like special characters in your password?");
  var numbers = window.confirm("Would you like numeric characters in your password?");

  if (!lowerCase && !upperCase && !special && !numbers) {
    window.alert("Please select at least one character type.");
    return;
  }  
}



  

  // prompt how many characters
  // var for charcters

  // What types of charctyers
  // special, number, upper, lower
  // window.confirm

  // Use answers to make password
  // vars that include all possible charcters
  // seperate vars for each type, arrays
  // example var upperLetters = ["A", "B", "C"]

  // take all true arrays and concat into new array -loop
  // choose random chars from arr based on user input
  // var push into new array
// var password = turn array into string .toString()

// return password;
