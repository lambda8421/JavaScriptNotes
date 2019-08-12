/*

array base binary heap indices

Node               Index
(itself)             N
Parent            (N-1) / 2
Left Child        (N*2) + 1
Right Child       (N*2) + 2
 */

function Heap() {
  this.items = [];
}

Heap.prototype.swap = function (i1, i2) {
  let tmp = this.items[i1];
  this.items[i1] = this.items[i2];
  this.items[i2] = tmp;
};

Heap.prototype.parentIndex = function (index) {
  return Math.floor((index - 1) / 2 )
};

Heap.prototype.leftChildIndex = function (index) {
  return index*2 + 1;
};

Heap.prototype.rightChildIndex = function (index) {
  return index*2 + 2;
};

Heap.prototype.parent = function (index){
  return this.items[this.parentIndex(index)];
};

Heap.prototype.leftChild = function (index) {
  return this.items[this.leftChildIndex(index)];
};

Heap.prototype.rightChild = function (index) {
  return this.items[this.rightChildIndex(index)];
};

Heap.prototype.size = function () {
  return this.items.length;
};

Heap.prototype.peek = function () {
  return this.items[0];
};

function MinHeap() {
  // this.items = [];
  this.item = [];
}

MinHeap.prototype = Object.create(Heap.prototype);

MinHeap.prototype.bubbleDown = function () {
  let index = 0;
  while (this.leftChild(index)
  && (this.leftChild(index) < this.items[index]
    || this.rightChild(index) < this.items[index])){
    let sIndex = this.leftChildIndex(index);
    if (this.rightChild(index)
    && this.rightChild(index) < this.items[sIndex]){
      sIndex = this.rightChildIndex(index);
    }
    this.swap(sIndex,index);
    index = sIndex;
  }
};

MinHeap.prototype.bubbleUp = function () {
  let index = this.items.length - 1;
  while (this.parent(index)
    && this.parent(index) > this.items[index]){
    this.swap(this.parentIndex(index),index);
    index = this.parentIndex(index);
  }
};

MinHeap.prototype.add = function (val) {
  this.items[this.items.length] = val;
  this.bubbleUp()
};

MinHeap.prototype.poll = function () {
  let val = this.items[0];
  this.items[0] = this.items[this.items.length - 1];
  this.items.pop();
  this.bubbleDown();
  return val;
};

var mh1 = new MinHeap();
   mh1.add(1);
   mh1.add(10);
   mh1.add(5);
   mh1.add(100);
   mh1.add(8);

   console.log(mh1);

console.log(mh1.poll()); // 1
console.log(mh1.poll()); // 5
console.log(mh1);
console.log(mh1.poll()); // 8
console.log(mh1.poll()); // 10
console.log(mh1.poll()); // 100