//“箭头函数”的this，总是指向定义时所在的对象，而不是运行时所在的对象。
let o = {  //定义对象没有this
    value:1,
    testArrow: () => console.log(this.value),
    normalFunc: function () {
        console.log(this.value)
    }
};

o.testArrow();
o.normalFunc(); //o is the this

function Obj() {  //函数有自己的this
    const f = ()=>console.log(this);
    f();
}

const fo = new Obj();


var obj = {
    a: 10
};

Object.defineProperty(obj, "b", {
    get: () => {
        console.log(this.a, typeof this.a, this);
        return this.a+10;
        // 代表全局对象 'Window', 因此 'this.a' 返回 'undefined'
    }
});

obj.b;
// undefined   "undefined"
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}