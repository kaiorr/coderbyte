function checkPalindrome(inputString) {
  let size = inputString.length;

  for(i = 0; i<= size/2; i++) {
    if(inputString[i] !== inputString[size -1 -i]) {
      return false
    }
  }
  return true
}

console.log(checkPalindrome('kaiorr'))
