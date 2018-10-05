// let string = `hello world`;
// let string = `Hello, World???`;
// let string = `This is the song that never ends....`;
// let string = `snakeCase`;
// let string = `snake-case`;
// let string = `SnAkE..CaSe..Is..AwEsOmE`;

// snakeCase(string);

function snakeCase(string) {
  //All cases except WTF
  let regexp = /[A-Z]*[a-z]+/g; 

  //WTF Case
  if (/\.\./.test(string)) 
    regexp = /\w+/g;
  
  return string.match(regexp).join(`_`).toLowerCase();
}