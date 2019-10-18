// let sumValues = function(a, b) {
//     return a + b;
// }

const sumValues = (a, b) => a + b;
console.log(sumValues(2, 3));

// Arrow functions with reduce
let array = [10, 20, 30, 40, 50];
let sum = array.reduce((a, b) => a + b);
console.log(sum);

// Arrow functions and this
// function Counter() {
//     this.count = 0;
//     setTimeout(function () {
//         this.count++;
//         console.log(this.count);
//     }.bind(this), 1)
// }
//
// let c = new Counter();

function Counter() {
    this.count = 0;
    setTimeout(() => {
        this.count++;
        console.log(this.count);
    }, 1)
}

let c = new Counter();
