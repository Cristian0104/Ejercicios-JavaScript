
const roundTo = (num, redondeo) => Math.round(num * Math.pow(10,redondeo)) / Math.pow(10,redondeo);

console.log(roundTo(2.123, 1)); // 2.12
