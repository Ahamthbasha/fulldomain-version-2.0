// class Graph{
//     constructor(){
//         this.adjancyList={}
//     }

//     addVertex(vertex){
//         if(!this.adjancyList[vertex]){
//             this.adjancyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjancyList[vertex1]){
//             this.adjancyList[vertex1] = new Set()
//         }

//         if(!this.adjancyList[vertex2]){
//             this.adjancyList[vertex2] = new Set()
//         }

//         this.adjancyList[vertex1].add(vertex2)
//         this.adjancyList[vertex2].add(vertex1)
//     }

//     display(){
//         for(let vertex in this.adjancyList){
//             console.log(`${vertex} -> ${[...this.adjancyList[vertex]]}`)
//         }
//     }

//     hasEdge(vertex1,vertex2){
//         return this.adjancyList[vertex1].has(vertex2) && this.adjancyList[vertex2].has(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(!this.adjancyList[vertex1] && !this.adjancyList[vertex2]){
//             return
//         }

//         this.adjancyList[vertex1].delete(vertex2)
//         this.adjancyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjancyList[vertex]){
//             return 'no vertex'
//         }

//         for(let adjancyVertex of this.adjancyList[vertex]){
//             this.removeEdge(vertex,adjancyVertex)
//         }

//         delete this.adjancyList[vertex]
//     }

//     bfs(start){
//         let visitedNode=new Set()
//         visitedNode.add(start)
//         let queue=[start]

//         while(queue.length){
//             let vertex=queue.shift()

//             console.log(vertex)

//             this.adjancyList[vertex].forEach(neighbor=>{
//                 if(!visitedNode.has(neighbor)){
//                     visitedNode.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             })
//         }
//     }

//     dfs(start,visitedNode = new Set()){
//         visitedNode.add(start)
//         console.log(start)

//         this.adjancyList[start].forEach(neighbor=>{
//             if(!visitedNode.has(neighbor)){
//                 this.dfs(neighbor,visitedNode)
//             }
//         })
//     }

//     bfsCycleDetection(start){
//         let visitedNode=new Set()
//         visitedNode.add(start)
//         let queue=[{vertex:start,parent:null}]

//         while(queue.length){
//             let {vertex,parent}=queue.shift()
//             for(let neighbor of this.adjancyList[vertex]){
//                 if(!visitedNode.has(neighbor)){
//                     visitedNode.add(neighbor)
//                     queue.push({vertex:neighbor,parent:vertex})
//                 }
//                 else if(neighbor != parent){
//                     console.log('cycle detected')
//                     return
//                 }
//             }
//         }
//         console.log("no cycle detections")
//     }

//     dfsCycleDetection(start,visitedNode=new Set(),parent=null){
//         visitedNode.add(start)

//         for(let neighbor of this.adjancyList[start]){
//             if(!visitedNode.has(neighbor)){
//                 this.dfsCycleDetection(neighbor,visitedNode,start)
//                 return true
//             }
//             else if(neighbor != parent){
//                 console.log("cycle detected")
//                 return true
//             }
//         }

//         console.log("cycle not found")
//     }
// }

// const graph = new Graph();

// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");

// // Add edges (This creates a cycle: A - B - C - A)
// graph.addEdge("A", "B");
// graph.addEdge("B", "C");
// graph.addEdge("C", "A");

// // Add more connections that don't create cycles
// graph.addEdge("D", "E");

// // Display the graph
// console.log("Graph:");
// graph.display();

// // Test BFS Cycle Detection
// console.log("\nBFS Cycle Detection from A:");
// graph.bfsCycleDetection("A");  // Expected: cycle detected

// console.log("\nBFS Cycle Detection from D:");
// graph.bfsCycleDetection("D");  // Expected: no cycle detected


// graph.dfsCycleDetection("A")

// graph.dfsCycleDetection("D")

// graph.bfs("A")

// graph.dfs("A")