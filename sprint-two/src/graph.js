

// Instantiate a new graph
var Graph = function () {
  this.storage = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  let root = new Graph(node);
  this.storage[node] = node;


};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  if (this.storage[node] === node) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  delete this.storage[node];

  for(let n in this.edges){
    this.removeEdge(n, node)
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  if (this.edges[fromNode] === toNode) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.edges[toNode] = fromNode
  this.edges[fromNode] = toNode;

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  if (this.edges[fromNode] === toNode) {
    delete this.edges[fromNode]
  }
  if (this.edges[toNode] === fromNode) {
    delete this.edges[toNode]
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for(let n in this.storage) {
    cb(n)
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


