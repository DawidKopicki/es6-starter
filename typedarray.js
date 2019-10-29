const typedArr = new Uint8Array([1, 2, 3, 4, 5, 30000, 5.333]);
console.log(typedArr);

for (const b of typedArr) {
    console.log(b);
}

const floatArr = new Float32Array([-1, 2, 3, 4, 5, 30000, 5.333]);
console.log(floatArr);