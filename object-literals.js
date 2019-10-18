function getPerson(name, age) {
    return {
        name,
        age,
        checkAge() {
            return this.age >= 18;
        },
        ['user' + name + age] : 'OK'
    };
}

let p = getPerson('Dawid', 26);
console.log(p);
console.log(p.checkAge());
console.log(p.userTomek44);
