const arr = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

const fromBytesToFormattedSizeUnits = (numBytes,trunq=3) =>{
    base = Math.floor(Math.log(numBytes < 0 ? -numBytes : numBytes)/Math.log(1000));

    for(let i = 0; i < base; i++ ){
        numBytes = numBytes/1000
    }
    return numBytes.toPrecision(trunq) + arr[base] 
} 




// const result = fromBytesToFormattedSizeUnits(1000);
// console.log(result); // 1KB
 
//  const result = fromBytesToFormattedSizeUnits(123456789);
//  console.log(result); // 123MB
 
  const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
  console.log(result); // -12.145GB