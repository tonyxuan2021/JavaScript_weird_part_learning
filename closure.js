// function greet(whattosay) {
//   return function (name) {
//     console.log(whattosay + " " + name);
//   };
// }

// let sayHi = greet("Hi");
// sayHi("Tony");

// function buildFunctions() {
//   let arr = [];
//   for (let i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }

//   return arr;
// }

// let fs = buildFunctions();
// fs[0]();

// function makeGreeting(language) {
//   return function (firstname, lastname) {
//     if (language === "en") {
//       console.log("hello " + firstname + " " + lastname);
//     }
//     if (language === "es") {
//       console.log("Hola " + firstname + " " + lastname);
//     }
//   };
// }

// let greetEnglish = makeGreeting("en");
// let greetSpanish = makeGreeting("es");

// greetEnglish("john", "doe");

function tellMeWhenDone(callback) {
  let a = 1000;

  let b = 2000;

  callback();
}

tellMeWhenDone(function () {
  console.log("i am done");
});
