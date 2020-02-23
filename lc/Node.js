// class Node {
//   constructor(value,left,right) {
//     this.value = value;
//     this.left = left ? left : null;
//     this.right = right ? left : null;
//   }
//
// }
//
// // export class ListNode {
// //   constructor(value,prev,next) {
// //     this.value = value;
// //     this.prev = prev;
// //     this.next = next;
// //   }
// //
// // }
//
// let node = new Node('1',new Node('2'),new Node('3'));
// console.log(node);
//
// module.exports = Node;
// export {Node};
// export {ListNode};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}


export {TreeNode,ListNode};

