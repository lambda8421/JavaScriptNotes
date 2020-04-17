const arr = [];
console.log(arr[1]);

const arr1 = new Array(3);
console.log(arr1[4])

function f() {
    this.value = "f";
    setTimeout(function () {
        console.log()
        console.log(this)
    })
}

f();