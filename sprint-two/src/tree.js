var Tree = function (value) {
  var newTree = {};//{value: dfds, children: [{value: ddfsd}]}
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods)
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function (value) {
  var newNode = Tree(value);//

  this.children.push(newNode);
  console.log(newNode);
};

treeMethods.contains = function (target) {

  if (this.value === target) {
    return true;
  } else if (this.children) {
    // this.children[0].contains(target)

  }
  else {
    return false;
  }
};

//{'value': 1, children: [{value: 2, children:[]}]}

// var root = Tree(1);
// // this.children.push(root)
// root.addChild(2);


/*
 * Complexity: What is the time complexity of the above functions?
 */
