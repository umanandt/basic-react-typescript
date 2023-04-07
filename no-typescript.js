function add(a, b) {
  return a + b;
}

const result = add(2, 5);

console.log(result);

//function add(a: number, b: number)

// here we are fixing that a and b are numbers
// but with normal JS it takes as string
// if we write like this add('2', '5')
// typescript can help us alot
// avoid such error better code

