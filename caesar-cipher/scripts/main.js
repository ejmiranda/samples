const RANGE = 26;
const caesar = (string, shift) => {
  return string.replace(/\w/g, (letter) => {
    let limit = (letter.charCodeAt() < 97) ? 65 : 97;
    let shiftCode = letter.charCodeAt() + shift;
    let wrapCode = 
        shiftCode - RANGE * Math.floor((shiftCode - limit) / RANGE);
    return String.fromCharCode(wrapCode);
  });
}