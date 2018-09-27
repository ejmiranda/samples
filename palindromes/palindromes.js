const palindromes = function(str) {
  let strArray = [];
  for (let char of str.toLowerCase().split(``)) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
      strArray.push(char);
  }
  for (let i = 0; i < Math.floor(strArray.length / 2); i++) {
    if (strArray[i] !== strArray[strArray.length - 1 - i])
      return false;
  }  
  return true;
}

/*From The Odin's Project*/

const odinPalindromes = function(string) {
  processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};