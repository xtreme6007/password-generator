// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Password criteria


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  function generatePassword() {
    var characterArray = "";
    var password = "";

    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var num = "0123456789";
    var specialChar = "!@#$%^&*()_+{}|[]\';:.></?"
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    var charLength = prompt("How many characters? Must be between 8 - 128 characters");
    if (charLength < 8 || charLength > 128) {
      var charLength = prompt("Please enter a number between 8 - 128");
      if (charLength < 8 || charLength > 128) {
        exit;
      }

    }


    var special = confirm("Click OK to use special character's!");
    var lower = confirm("Click OK to you use lower case characters!");
    var upper = confirm("Click OK to use uppercase characters!");
    var numeric = confirm("Click OK to use numeric characters!");

    if (special) {
      characterArray = characterArray.concat(specialChar);
    }
    if (lower) {
      characterArray = characterArray.concat(lowerCase);

    }
    if (upper) {
      characterArray = characterArray.concat(upperCase);
    }
    if (numeric) {
      characterArray = characterArray.concat(num);
    }
    if (special !== true && lower !== true && upper !== true && numeric !== true) {
      alert("you must choose one option");
      exit;
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
