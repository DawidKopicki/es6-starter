// async function wait3seconds(string) {
//     return string;
// }
// console.log(wait3seconds('Hello')); // returns info about Promies resolved and "Hello"

async function wait3seconds(string) {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(string);
        }, 3000)
    });
}
console.log(wait3seconds('Hello')); // returns info about Promies pending and "undefined"

async function run() {
    let result = await wait3seconds('Hey you!');
    return result;
}

run().then(res => {
    console.log(res);
});
console.log(wait3seconds('Hello')); // after 3sec returns "Hey you!"