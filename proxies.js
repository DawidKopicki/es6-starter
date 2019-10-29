let x = {};
let handler = {
    get: function (obj, key) {
        // return obj[key] * 2;
        return `${obj[key]}`;
    }
};

let p = new Proxy(x, handler);

p.id = 345;
p.title = "ES6 Course";

console.log(p.id);
console.log(x.id);

console.log(p.title);