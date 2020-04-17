/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

 */
/**
 * initialize your data structure here.
 */

var Node = function(val,next,min){
    this.val = val;
    this.next = next;
    this.min = min;
}
var MinStack = function() {
    this.head = null;

};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.head){
        let node = new Node(x,this.head,Math.min(x,this.head.min));
        this.head = node;
    }else{
        this.head = new Node(x,null,x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.head = this.head.next;
    return ;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.head.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.head.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(-2);
obj.push(0);
obj.push(-1);
obj.getMin();
obj.top();
obj.pop();
obj.getMin();