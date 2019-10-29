class ArrayWithId extends Array {
    constructor(id) {
        super();
        this.id = id;
    }

    updateId(id) {
        this.id = id;
    }
}

let arr = new ArrayWithId(1);
arr.push("A");
arr.updateId(2);

console.log(arr);
console.log(arr.length);