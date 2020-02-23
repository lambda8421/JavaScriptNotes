let someValue = 'someValue', someOtherValue = 'someOtherValue';
let doSomeThing = function (...args) {
  console.log(args)
};
let doSomeOtherThing = function () {
};

let promisifiedAjaxCall = () => new Promise(res => res('someValue'));
let anotherPromisifiedAjaxCall = () => new Promise(res => res('someOtherValue'));

var ajaxRoutine = function () {
  promisifiedAjaxCall().then(function (result1) {
    anotherPromisifiedAjaxCall().then(function (result2) {
      if (result1 === someValue && result2 === someOtherValue) {
        doSomeThing(result1, result2);
      } else {
        doSomeOtherThing();
      }
    });
  });
};

// ajaxRoutine();

var ajaxGenerator = function* () {
  let r1 = yield promisifiedAjaxCall();
  console.log(r1 + ' ajaxGenerator');
  let r2 = yield anotherPromisifiedAjaxCall();
  if (r1 === someValue && r2 === someOtherValue) {
    doSomeThing(r1, r2);
  } else {
    doSomeOtherThing();
  }
};

var testGenerator = ajaxGenerator();
var result1Promise = testGenerator.next().value.then(function (result1) {
  var result2Promise = testGenerator.next(result1).value.then(function (result2) {
    testGenerator.next(result2);
  });
});




