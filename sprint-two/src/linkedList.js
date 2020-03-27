var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  var newNode = Node(value);
  list.addToTail = function(value) {
    if(Object.keys(newNode.node).length === 0){
      list.head = newNode.value;
    }
      list.tail = newNode.value;
  };

  list.removeHead = function() {

  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};//{'value': value, 'next': null}

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
