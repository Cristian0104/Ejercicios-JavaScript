

const splitArrayIntoChunks = (arr,divisor) => {
    const arrayChunks = [];
    for (let i = 0; i < arr.length; i += divisor) {
        arrayChunks.push(arr.slice(i, i + divisor));
    }
    return arrayChunks;
}

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]