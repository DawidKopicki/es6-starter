let m = new Map();
m.set(1, 'React');
m.set(2, 'Angular');
m.set(3, 'Vue');
m.set(4, 'Ember');

// console.log(m);
for(const v of m) {
    console.log(v);
}

console.log(m.size);
// Removing element with key nr 1
m.delete(1);

// Display element with key nr 1
const r = m.get(1);
console.log(r);
