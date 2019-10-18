// let s1 = Symbol('Logging');
// let s2 = Symbol('Logging');
//
// console.log(s1 === s2);

let person = {
    name: 'Paolo',
    age: 16,
    city: 'Barcelona'
};

let s = Symbol();
person[s] = '1376';

for (let i in person) {
    console.log(i);
}
console.log(person[s]);
console.log(Object.getOwnPropertySymbols(person));
