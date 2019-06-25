//promise

function Promise() {
  this.then = function () {

  };

  this.catch = function () {

  }
}

Promise.prototype.c = function (x) {
  console.log(x);
}

const p = new Promise();
p.c('fff');