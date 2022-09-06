// console.log(this);

function a() {
  console.log(this);
  this.newvariable = "hello";
}

let b = function () {
  console.log(this);
};

a();

console.log(newvariable);

b();

var c = {
  name: "the c object",
  log: function () {
    this.name = "updated c object";
    console.log(this);
  },
};

c.log();
