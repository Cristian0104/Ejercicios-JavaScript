const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

const filteredArray = arrNumber1.filter(value => arrNumber2.includes(value) && arrNumber3.includes(value));

console.log(filteredArray);

