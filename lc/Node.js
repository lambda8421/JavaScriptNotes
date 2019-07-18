class TreeNode {
  constructor(value,left,right) {
    this.value = value;
    this.left = left ? left : null;
    this.right = right ? left : null;
  }

}

// export class ListNode {
//   constructor(value,prev,next) {
//     this.value = value;
//     this.prev = prev;
//     this.next = next;
//   }
//
// }

let node = new TreeNode('1',new TreeNode('2'),new TreeNode('3'));
console.log(node);

module.exports = TreeNode;
// export {TreeNode};
// export {ListNode};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}