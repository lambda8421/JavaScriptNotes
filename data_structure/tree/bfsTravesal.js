function Node(value,left,right) {
  this.left = left;
  this.right = right;
  this.value = value;
}


let tree = new Node(1);
tree.left = new Node(2);
tree.left.left = new Node(3);
tree.left.right = new Node(4);
tree.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

function bfs(tree) {
  let arr = [];
  arr.push(tree);
  while (arr[0]){
    let node = arr.shift();
    arr.push(node.left,node.right);
    console.log(node.value);
  }
}

bfs(tree);