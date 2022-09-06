// by value
let a = 3;
let b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by reference (all objects)

let c = { greeting: "hi" };
let d;

d = c;

c.greeting = "hello";

console.log(c);
console.log(d);

// d points to the same reference location that a points to in memory

function changeGreeting(obj) {
  obj.greeting = "Hola";
}

changeGreeting(d);

console.log(c);
console.log(d);
