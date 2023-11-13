function add(x, y) {
  const xNum = Number.parseInt(x)
  const yNum = Number.parseInt(y)

  if (isNaN(xNum)) {
    throw Error(`Parameter x value '${x}' is not a number.`);
  }
  if (isNaN(yNum)) {
    throw Error(`Parameter y value '${y}' is not a number.`);
  }
  
  return xNum + yNum;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
