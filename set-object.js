let set = new Set();

set.add(10);
set.add(20);
set.add('OK');
set.add(true);

// console.log(set);
set.delete(10);
console.log(set.has(10));

for(const v of set) {
    console.log(v);
}
