function Calculator() {
  this.operations = {
    '+': (n1, n2) => n1 + n2,
    '-': (n1, n2) => n1 - n2,
  }
  this.addOperations = (sign, formula) => {
    this.operations[sign] = formula;
  }
  this.calculate = (operationStr) => {
    let result = '';
    let [n1, sign, n2] = operationStr.split(' ');
    if (sign in this.operations) {
      result = `${n1} ${sign} ${n2} = ${this.operations[sign](+n1, +n2)}`;
    } else {
      result = 'No such operation.'
    }
    console.log(result);
  };
}

let calc = new Calculator();
calc.calculate('2 - 1'); // 2 - 1 = 1
calc.addOperations("*", (n1, n2) => n1 * n2);
calc.calculate('2 * 2'); // 2 * 2 = 4
calc.addOperations("/", (n1, n2) => n1 / n2);
calc.calculate('4 / 2'); // 4 / 2 = 2
calc.addOperations("**", (n1, n2) => n1 ** n2);
calc.calculate('2 ** 3'); // 2 ** 3 = 8
calc.calculate('5 % 2'); // No such operation.