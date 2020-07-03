// Assignment Code
var generateBtn = document.querySelector("#generate");
var charactersArray = "!@#$%^&*()".split("");
var upperLettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerLettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
var numbersArray = "1234567890".split("");

//function returning a password as value and following the users criterias
function generatePassword() {
  // prompt the user to choose the length of the password
  var message = "please pick a length for the password";
  var passLength
  // loop to make sure user chooses between 8 and 128 characters
  do {
    //call the function promptCheck I created to check user entry and return a valid value
    alert(
      "Password can't be less than 8 characters long or more than 128 characters"
    );
    passLength = promptCheck(passLength, message);
  } while (passLength < 8 || passLength > 128);
  //console.log(passLength);

  //make sure the user choses at least one type of characters to include
  while (!numbers && !upperLetters && !lowerLetters && !characters) {
    var numbers = confirm("Would you like to include numbers?");
    // console.log("Made a choice about NUMBERS.");
    var upperLetters = confirm("Would you like to include uppercase letters?");
    // console.log("Made a choice about UPPER LETTERS.");
    var lowerLetters = confirm("Would you like to include lowercase letters?");
    // console.log("Made a choice about LOWER LETTERS.");
    var characters = confirm("Would you like to include special characters?");
    if (!numbers && !upperLetters && !lowerLetters && !characters) {
      alert("you have to pick at least one criteria");
    }
  }

  //variable to store the new password
  var passwordNew = [];
  // big pool will contain all the pools the user chose to get characters from
  var bigPool = [];
  // if selected make sure at least one number is in the mix
  if (numbers) {
    passwordNew.push(
      numbersArray[Math.floor(Math.random() * numbersArray.length)]
    );
    //update password length
    passLength--;
    // add the numbers to the big pool
    bigPool = bigPool.concat(numbersArray);
    //console.log(bigPool);
  }
  // if selected make sure at least one uppercase letter is in the mix
  if (upperLetters) {
    passwordNew.push(
      upperLettersArray[Math.floor(Math.random() * upperLettersArray.length)]
    );
    //update password length
    passLength--;
    // add the uppercase letters to the big pool
    bigPool = bigPool.concat(upperLettersArray);
    //console.log(bigPool);
  }
  // if selected make sure at least one lowercase is in the mix
  if (lowerLetters) {
    passwordNew.push(
      lowerLettersArray[Math.floor(Math.random() * lowerLettersArray.length)]
    );
    //update password length
    passLength--;
    // add the lower letters  to the big pool
    bigPool = bigPool.concat(lowerLettersArray);
    //console.log(bigPool);
  }
  // if selected make sure at least one special character is in the mix
  if (characters) {
    passwordNew.push(
      charactersArray[Math.floor(Math.random() * charactersArray.length)]
    );
    //update password length
    passLength--;
    // add the special characters  to the big pool
    bigPool = bigPool.concat(charactersArray);
    //console.log(bigPool);
  }
  // a pool to fill the rest of the password
  //console.log(bigPool);
  for (let i = 0; i < passLength; i++) {
    passwordNew.push(bigPool[Math.floor(Math.random() * bigPool.length)]);
    //console.log(passLength);
  }

  //console.log(passLength);
  //console.log(passwordNew);
  return passwordNew.join("");
}
// transfer the password value to the html file
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function promptCheck(numberInput, message) {
  //loop to make sure the user enters a valid value
  // boolean variable to run the loop with
  var isNumber = false;
  //start of the loop
  while (!isNumber) {
    // give the use option to pick a number
    numberInput = prompt(message);
    //check if user clicks on cancel
    if (numberInput == null) {
      //if he does ask him to enter a  value
      alert("please enter a value");
      //check if user enters a correct number
    } else if (isNaN(parseInt(numberInput))) {
      //if he doesnt ask him to enter a valid number
      alert("please enter a valid number");
      //   if both previous conditions are false then pass the value
    } else {
      numberInput = parseInt(numberInput);
      //console.log(numberInput);
      isNumber = true;
    }
  }
  return numberInput;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
