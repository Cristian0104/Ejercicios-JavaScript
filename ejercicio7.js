const returnFalsyValues = (objeto,x)  =>  Object.fromEntries(Object.entries(objeto).filter( num => !x(num[1])));

const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')

 
console.log(result); // {a: 1, c: 3}