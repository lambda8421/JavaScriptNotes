/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.arr = [];
  this.currentSize = 0;
  this.size = size;
  this.total = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  if(this.currentSize === this.size){
    let value = this.arr.shift();
    this.total = this.total - value + val;
    this.arr.push(val);
  }else{
    this.currentSize ++;
    this.total += val;
    this.arr.push(val);
  }
  return this.total/this.currentSize;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

var obj = new MovingAverage(3);
param_1 = obj.next(1);
param_1 = obj.next(10);
param_1 = obj.next(3);
param_1 = obj.next(5);
console.log(param_1);

let mv = new MovingAverage(1);
console.log(mv.next(4));
console.log(mv.next(0));

let arr = new Array(3);
arr.push(1);
console.log(arr.shift())


let x = 12;
console.log(Math.floor(15/10))