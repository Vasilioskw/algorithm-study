
function dfs(vertex, graph, visited = new Set()) {
// Initialize a set for tracking visited vertices
// Add the current vertex to the set
// For each neighbor of the vertex
//   If neighbor has not been visited
//     Make recursive call with neighbor
}



const graph = { 
  0: [1, 3, 6],
  1: [4, 5],
  2: [5, 7],
  3: [0, 5],
  4: [1, 6],
  5: [1, 2, 3],
  6: [0, 4],
  7: [2]
}

const graph2 = {
  0: [1, 2, 3],
  1: [0, 2],
  2: [0, 4],
  3: [0],
  4: [2]
}


function hello() {
console.log('hello')
    hello()
}

hello()