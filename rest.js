function getValues(...Args) {
    // console.log(Args.length);
    let values = Args.sort();
    return values;
}

console.log(getValues('React', 'Ember', 'Angular', 'Vue'));
