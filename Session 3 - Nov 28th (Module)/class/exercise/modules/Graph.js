class Vertex {
  constructor(data) {
    this.data = data;
  }
}
class Edge {
  constructor(a, b) {
    if (a instanceof Vertex && b instanceof Vertex) {
      this.a = a;
      this.b = b;
    }
  }
}

class Graph {
  name;
  vertices;
  edges;

  constructor(name) {
    this.name = name;
    this.vertices = [];
    this.edges = [];
  }
  addVertex(v) {
    if (v instanceof Vertex) {
      this.vertices.push(v);
    }
  }
  addEdge(a, b) {
    if (a instanceof Vertex && b instanceof Vertex && a != b) {
      let foundEdge = this.edges.find((edge) => {
        return (edge.a === a && edge.b === b) || (edge.a === b && edge.b === a);
      });
      if (!foundEdge) {
        let newEdge = new Edge(a, b);
        this.edges.push(newEdge);
      }
    }
  }
}
 let myGraph = new Graph("My Graph");
 let A = new Vertex("A");
 let B = new Vertex("B");
 let C = new Vertex("C");
 let D = new Vertex("D");
 let E = new Vertex("E");

 myGraph.addVertex(A);
 myGraph.addVertex(B);
 myGraph.addVertex(C);
 myGraph.addVertex(D);
 myGraph.addVertex(E);

 myGraph.addEdge(A,B);
 myGraph.addEdge(B,A);
 myGraph.addEdge(C,A);
 myGraph.addEdge(D,E);
