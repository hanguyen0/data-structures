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
  //possibly return new node
  // console.log(newNode);
};

treeMethods.contains = function (target) {
  if(this.value === target) {
    return true
  }
  for(let i = 0; i < this.children.length; i++){
    let flag = this.children[i].contains(target)
    if(flag){
      return true
    }
  }
  return false
};
// var
/*
create flag-isFound set it to false
create closure variable so return anonoymous function

if the value matches the target
flag is true

loop over children
call contains on current node with target

return flag


value of currrent node is the target we are looking ofr
if it is -> return true

loop thorugh each child and ask that child
->do you contain that target value
->return true if that's the case

return false if no value contains the target
*/




//{'value': 1, children: [{value: 2, children:[]}]}

// var root = Tree(1);
// // this.children.push(root)
// root.addChild(2);

//  function inner(node) {
  //   // console.log("child",child)


  //   // child.children.contains(target);
  //   for (var i = 0; i < children.length; i++) {
  //     if (node[i].value === target) {
  //       console.log("in this")
  //       hasFound = true;
  //       return hasFound;
  //     }
  //    inner(node[i]);
  //   }
  //   return hasFound;
  // }
  // // var flag =
  // inner(this.children);
/*
 * Complexity: What is the time complexity of the above functions?
 */
