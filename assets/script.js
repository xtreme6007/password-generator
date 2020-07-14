// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Password criteria
 
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var num = "0123456789".split("");
  var specialChar = "!@#$%^&*()_+{}|[]\';:.,></?".split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


  var charLength = prompt("How many characters? Must be between 8 - 128 characters");
  var special = confirm("Click OK to use special character's!");
  var lower = confirm("Click OK to you use lower case characters!");
  var upper = confirm("Click OK to use uppercase characters!");
  var numeric = confirm("Click OK to use numeric characters!");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  function generatePassword() {
    var characterArray = [];
    var password = "";

    if (special) {
      characterArray.concat(specialChar);
    }
    if (lower) {
      characterArray.concat(lowerCase);
    }
    if (upper) {
      characterArray.concat(upperCase);
    }
    if (numeric) {
      characterArray.concat(num)
    }
    for (var i = 0; i < charLength; i++) {
      var randomNumber = Math.floor(Math.random() * characterArray.length);
      var character = characterArray[randomNumber];
      password += character;
    }
      return password;

  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Criteria

//document.getElementByIdgenerate

