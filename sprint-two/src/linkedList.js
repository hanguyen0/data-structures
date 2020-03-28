var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var newNode = Node(value);
    list.tail = newNode;
    if (list.head === null) {
      list.head = newNode;

    }
    list.head.next = newNode;
  };

  list.removeHead = function () {
    if (list.head !== null) {
      list.head = list.head.next
    }
    return list.head.value;
  };

  list.contains = function (target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

    return list;
  };

  var Node = function (value) {
    var node = {};

    node.value = value;
    node.next = null;

    return node;
  };

/*
 * Complexity: What is the time complexity of the above functions?
    addToTail worst case O(1)
    removedHead worst case O(1)
    Contains worst case O(n)
 */
