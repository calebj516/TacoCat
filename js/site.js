// Get Values
function getValues() {
  // Get string from user
  let str = document.getElementById('userInput').value;
  // Pass string to isPalindrome
  let status = isPalindrome(str);
  // Pass result of isPalindrome to displayResults
  displayResults(status, str);
}

// Determine Palindrome Status
function isPalindrome(str) {
  // create a reversed copy of str
  let reversedStr = str.split('').reverse().join('');
  // return result
  return str === reversedStr;
}

// Display Results
function displayResults(status, str) {
  let reversedStr = str.split('').reverse().join('');
  // write to the page
  if(status){
    alert(`Success! ${reversedStr} is a palindrome!`);
    // document.getElementById('msg').innerHTML = `Success! ${reversedStr} is a palindrome!`;
    // document.getElementById('alert').classList.remove('invisible');
  } else {
    alert(`Too bad! ${str} is not a palindrome.`);
    // document.getElementById('msg').innerHTML = `Too bad! ${reversedStr} is not a palindrome.`;
    // document.getElementById('alert').classList.remove('invisible');
  }
}