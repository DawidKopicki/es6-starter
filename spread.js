function sumValues(a, b, c) {
    return a + b + c;
}

const values = [3, 2, 7];

// let sum = sumValues.apply(null, values);
// console.log(sum);

console.log(sumValues(...values));

// Spread with push
const array1 = [10, 20, 30];
const array2 = [40, 50, 60];
array1.push(...array2);
console.log(array1);
