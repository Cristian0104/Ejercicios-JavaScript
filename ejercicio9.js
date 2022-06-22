const myObject = { NamE: 'Charles', ADDress: 'Home Street' };

const toLowercaseKeys = (myObject) =>  Object.fromEntries(
    Object.entries(myObject).map(([k, v]) => [k.toLowerCase(), v])
  );
    


const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }