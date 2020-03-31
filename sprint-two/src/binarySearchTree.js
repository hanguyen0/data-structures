var BinarySearchTree = function (value) {
  let binaryST = {};
  binaryST.value = value;
  binaryST.left = null;
  binaryST.right = null;
  //accepts a value and places it in the tree in the correct position.
  binaryST.insert = function (value) {
    var node = BinarySearchTree(value);
    //add value to right tree
    if (value > binaryST.value) {
      binaryST.right = binaryST.insert(value)
    }
    //add value to left tree
    if (value < binaryST.value) {
      binaryST.left = binaryST.insert(value)
    }

  }
  //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  binaryST.contains = function (value) {
    if(binaryST.value = value){
      return true;
    } else if(value < binaryST.value) {
      //traverse left side
      binaryST.left.contains(value);
    }else {
      //traverse right side
      binaryST.right.contains(value);
    }
    //no value found
    return false
  }
  // accepts a callback and executes it on every value contained in the tree
  binaryST.depthFirstLog = function (func) {
    
  }

  return binaryST;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
