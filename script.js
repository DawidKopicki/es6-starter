function sumOfTwoNumbers(x = 1, y = 2) {
    return x + y;
}

console.log(sumOfTwoNumbers());

// l. 2

let name = 'Main header';

console.log(name.includes('header'));

// Destructuring
const obj = {
    login: "Dawid",
    age: 26
};

const { login, age } = obj;

console.log(login, age);

// Array destructuring

const arr = [1, 2, 3, 4, 5];

const [ a, b, c ] = arr;
console.log(a + " " + b + " " + c);