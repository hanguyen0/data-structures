var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var newNode = Node(value);//{'value': 5, 'next': {value: 4, next : null}}
    list.tail = newNode;
    if (list.head === null) {
      list.head = newNode;//{'value': 4, 'next': null}

    }
    list.head.next = newNode;
    //{value: 4, next : null}
    //{'value': 5, 'next': {value: 4, next : null}}

    // var currentNode = head

     //{'value': 1, 'next': null}
    // console.log('head ', list.head)
    // console.log('node.next', newNode.next)
    // console.log("newNode ", newNode)
    // console.log("tail ", list.tail)
  };

  list.removeHead = function () {

  };

  list.contains = function (target) {
  };

  return list;
};

var Node = function (value) {
  var node = {};//{'value': 5, 'next': {value: 4, next : null}}

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
