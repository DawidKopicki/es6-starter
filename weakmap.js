let m = new WeakMap();

let obj1 = { id: 1 };
let obj2 = { id: 2 };
let obj3 = { id: 3 };

m.set(obj1, 'React');
m.set(obj2, 'Angular');
m.set(obj3, 'Ember');

console.log(m.get(obj3));
