function addPara(text = ``) {
  if (text !== ``) {
    let textNode = document.createTextNode(text);
    let para = document.createElement(`p`);
    para.appendChild(textNode);
    document.body.appendChild(para);
    console.log(`Added a <p> element with the string: '${text}'`);
  } else {
    console.log(`<p> element not created because the string was empty`)
  }
}

function doFizzBuzz(num = 1) {
  if (num >= 1) {
    for (i = 1; i <= num; i++) {
      let text = ``;
      if ((i % 3 === 0) && (i % 5 === 0)) {
        text = `FizzBuzz`;
      } else if (i % 3 === 0) {
        text = `Fizz`;
      } else if (i % 5 === 0) {
        text = `Buzz`;
      } else {
        text = i;
      }
      addPara(text);
    }
    console.log(`'doFizzBuzz' successful`);
  } else {
    console.log(`The parameter must be 1 or higher`);
  }
}