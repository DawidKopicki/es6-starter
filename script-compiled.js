'use strict';

function sumOfTwoNumbers() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    return x + y;
}

console.log(sumOfTwoNumbers());

// l. 2

var name = 'Main header';

console.log(name.includes('header'));

// Destructuring
var obj = {
    login: "Dawid",
    age: 26
};

var login = obj.login,
    age = obj.age;


console.log(login, age);

// Array destructuring

var arr = [1, 2, 3, 4, 5];

var a = arr[0],
    b = arr[1],
    c = arr[2];

console.log(a + " " + b + " " + c);
