let obj1 = {
    x:'x',
    y:'y'
}

let obj = {
    xz: 'xz',
}



Object.setPrototypeOf(obj,obj1);

Object.setPrototypeOf(obj1,{zzz:'ddd'})

console.log(obj)

for (const key in obj) {
    // if (obj.hasOwnProperty(key)) {
        console.log(obj[key]);
    // }
}
for (const key in obj1) {
    console.log(key)
}

function Obj(){
    Obj.prototype.test = function test() {
        console.log('test');
    }
}

const o = Obj();
const obj3 = new Obj();
obj3.test();