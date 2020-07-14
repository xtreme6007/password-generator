// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Password criteria
  var charLength = prompt("How many characters? Must be between 8 - 128 characters");  
  var special = confirm("Click OK to use special character's!");
  var lower = confirm("Click OK to you use lower case characters!");
  ‹var upper = confirm("Click OK to use uppercase characters!");
  var numeric = confirm("Click OK to use numeric characters!"); 


  var lowercase = "abcdefghijklmnopqrstuvwxyz".split();
  var num = "0123456789".split
  var special = "!@#$%^&*()_+{}|[]\';:.,></?".split
var upper = lowercase.toUpperCase().split("");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Criteria

//document.getElementByIdgenerate

