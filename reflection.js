let color = {
    name: 'blue',
    hex: '#0000FF'
};

// Removing properties from Object
Reflect.deleteProperty(color, 'hex');
console.log(color);

// Adding properties to Object
// let prop = Object.defineProperty(color, 'class', { value: 'basic' }); // returns Object
let prop = Reflect.defineProperty(color, 'class', { value: 'basic' }); // returns boolean
console.log(prop);