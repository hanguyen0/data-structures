var BinarySearchTree = function () {
  let binaryST = {};

  binaryST.left = {};
  binaryST.right = {};
  //accepts a value and places it in the tree in the correct position.
  binaryST.insert = function(value) {
    if(value > binaryST.left){
      binaryST.right = value;
    }

  }
  //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  binaryST.contains = function(value) {

  }
  // accepts a callback and executes it on every value contained in the tree
  binaryST.depthFirstLog = function(func) {

  }
  return binaryST;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
