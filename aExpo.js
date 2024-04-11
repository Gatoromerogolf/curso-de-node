function suma(a, b) {
  let result = a + b;
  return result;
}

function multiply(a, b) {
  let producto = (a * b) ** 2;
  return producto;
}

suma(20,50);
multiply(2,4);

module.exports.teSumo = suma;
module.exports.teMulti = multiply;

module.exports = {
  teSumo:suma,
  teMulti:multiply,
  teSumo2:suma,
  teMulti2:multiply,
}