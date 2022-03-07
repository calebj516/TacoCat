// Get Values
function getValues() {
  // make sure the alert is invisble
  document.getElementById('alert').classList.add('invisible');
  // Get string from user
  let str = document.getElementById('userInput').value;
  // Pass string to isPalindrome
  let returnObj = isPalindrome(str);
  // Pass result of isPalindrome to displayResults
  displayResults(returnObj);
}

// Determine Palindrome Status
function isPalindrome(str) {
  // lowercase and remove special characters
  str = str.toLowerCase();
  // remove special characters
  let regex = /[^a-z0-9]/gi;
  str = str.replace(regex, '');
  // create a reversed copy of str and an object to hold the result message and reversed string
  let reversedStr = '';
  let returnObj = {};
  // loop through str in reverse, adding each element to reversedStr
  for(let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
  }
  // return result message
  str === reversedStr ? returnObj.msg = "Well done! You entered a Palindrome!" : returnObj.msg = "Sorry! You did not enter a Palindrome.";
  // add a property to returnObj called reversed which holds the reversed string
  returnObj.reversed = reversedStr;
  // return the object holding result information
  return returnObj;
}

// Display Results
function displayResults(returnObj) {
  // display return message in alert header
  document.getElementById('alertHeader').innerHTML = returnObj.msg;
  // show the reversed user input in the message
  document.getElementById('msg').innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
  // unhide the alert
  document.getElementById('alert').classList.remove('invisible');
}