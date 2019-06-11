let obj = {
    value:1,
    testAarrow: () => console.log(this.value),
    normalFunc: function () {
        console.log(this.value)
    }
}

obj.testAarrow();
obj.normalFunc();