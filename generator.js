function *generator() {
    yield "Raz";
    yield "Dwa";
}

let x = generator();
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().done);

function *cities() {
    yield 'Warszawa';
    yield 'Wrocław';
    yield 'Opole';
}

let places = cities();
for(let city of places) {
    console.log(city);
}
