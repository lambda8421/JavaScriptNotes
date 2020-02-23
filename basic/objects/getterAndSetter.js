function Obj() {
    let attr = 1;
    this.getAttr = function () {
        return attr;
    }
}

const obj = new Obj();
console.log(obj.getAttr());
console.log(x = 2)

/*
define get method for attr, if no attr for get or set method
, it will automatic generate new one for obj
*/
const obj1 = {
    collections: ['x', 'y', 'z'],
    get firstElement() {
        return this.collections[0];
    },

}

console.log(obj1.firstElement)

// ES6 syntax
class NinjaCollection {
    constructor() {
        this.ninjas = ["Yoshi", "Kuma", "Hattori"];
    }
    get firstNinja() {
        report("Getting firstNinja");
        return this.ninjas[0];
    }
    set firstNinja(value) {
        report("Setting firstNinja");
        this.ninjas[0] = value;
    }
}
const ninjaCollection = new NinjaCollection();


//define with define property

function DefineProperty(){
    let _level = 0;

    Object.defineProperty(this,'level',{
        get:()=>_level,
        set:level=>{
            if (!Number.isInteger(level)) {
                throw new TypeError("Skill level should be a number");
            }
            _level = level;
        }
    });
}

const defineProperty = new DefineProperty();
defineProperty.level = 'level';
console.log(defineProperty.level);

//test obj attr with vairable name
let cols = ['x', 'y']
const obj2 = {
    cols,
}

console.log(obj2.cols)