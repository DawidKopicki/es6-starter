let string = 'Header';
console.log(string.padStart(10, 'X')); // returns XXXXHeader - extends string to 10 characters, starting from left
console.log(string.padEnd(10, 'X')); // returns HeaderXXXX - extends string to 10 characters, starting from right

const obj = {
    name: 'Header',
    id: 234
};

console.log(Object.values(obj)); // returns values from obj
console.log(Object.entries(obj)); // returns pairs key-value