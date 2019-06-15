let arr1 = ['x','y','z'];
let arr2 = new Array(2);
arr2.push('arr');

// arr1[4] = 'arr'
// arr2[4] = 'arr';
console.log(arr1[4]); //undefined
console.log(arr2[1]); //undefined
console.log(arr2[4]); //undefined

/*
■ push adds an item to the end of the array.
■ unshift adds an item to the beginning of the array.
■ pop removes an item from the end of the array.
■ shift removes an item from the beginning of the array.

 */

const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"];
delete ninjas[1];
//ninjas' length still 4


//Don’t use objects as maps

//For these two reasons—properties inherited through prototypes and support for string-only keys
// plain objects generally aren’t useful as maps.

const directory = new Map();
directory.set("Yoshi", "+81 26 6462");
directory.set("Kuma", "+81 52 2378 6462");
directory.set("Hiro", "+81 76 277 46");

for(let item of directory){
  console.log(item) //[key,value]
}

for(let key of directory.keys()){
}
for(let value of directory.values()){

}


//set

function Set(){
  this.data = {};
  this.length = 0;
}
Set.prototype.has = function(item){
    return typeof this.data[item] !== "undefined";
};
Set.prototype.add = function(item){
  if(!this.has(item)){
    this.data[item] = true;
    this.length++;
  }
};

  Set.prototype.remove = function(item){
    if(this.has(item)){
      delete this.data[item];
      this.length--;
    }
  };
const ninjasSet = new Set();
ninjasSet.add("Hattori");
ninjasSet.add("Hattori");


//initialization
const ninjas = new Set(["Kuma", "Hattori", "Yagyu", "Hattori"]);

//intersection

const ninjas = new Set(["Kuma", "Hattori", "Yagyu"]);
const samurai = new Set(["Hattori", "Oda", "Tomoe"]);
const ninjaSamurais = new Set(
  [...ninjas].filter(ninja => samurai.has(ninja))
);