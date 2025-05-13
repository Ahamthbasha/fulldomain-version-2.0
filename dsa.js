// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class bst{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }
//         else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         else if(root.value == value){
//             return true
//         }
//         else if(value < root.value){
//             return this.search(root.left,value)
//         }
//         else{
//             return this.search(root.right,value)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     levelOrder(root){
//         let queue = []
//         queue.push(root)

//         while(queue.length){
//             let cur = queue.shift()

//             if(cur){
//                 console.log(cur.value)

//                 if(cur.left){
//                     queue.push(cur.left)
//                 }

//                 if(cur.right){
//                     queue.push(cur.right)
//                 }
//             }
//         }
//     }

//     min(root){
//         if(!root){
//             return null
//         }

//         while(root.left){
//             root = root.left
//         }

//         return root.value
//     }

//     max(root){
//         if(!root){
//             return null
//         }

//         while(root.right){
//             root = root.right
//         }

//         return root.value
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(!root){
//             return null
//         }

//         if(value < root.value){
//             root.left = this.deleteNode(root.left,value)
//         }
//         else if(value > root.value){
//             root.right = this.deleteNode(root.right,value)
//         }
//         else{
//             if(!root.right && !root.left){
//                 return null
//             }

//             if(!root.left){
//                 return root.right
//             }

//             if(!root.right){
//                 return root.left
//             }

//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }

//         return root
//     }
// }

// const tree = new bst();

// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(3);
// tree.insert(7);
// tree.insert(12);
// tree.insert(17);

// console.log("InOrder (Should be sorted):");
// tree.inOrder(tree.root); // 3 5 7 10 12 15 17

// console.log("PreOrder:");
// tree.preOrder(tree.root); // 10 5 3 7 15 12 17

// console.log("PostOrder:");
// tree.postOrder(tree.root); // 3 7 5 12 17 15 10

// console.log("LevelOrder:");
// tree.levelOrder(tree.root); // 10 5 15 3 7 12 17

// console.log("Min:", tree.min(tree.root)); // 3
// console.log("Max:", tree.max(tree.root)); // 17

// console.log("Search 7:", tree.search(tree.root, 7)); // true
// console.log("Search 20:", tree.search(tree.root, 20)); // false

// console.log("Delete 5 (Node with two children):");
// tree.delete(5);
// tree.inOrder(tree.root); // Should not include 5

// console.log("Delete 15 (Node with two children):");
// tree.delete(15);
// tree.inOrder(tree.root); // Should not include 15

// console.log("Delete 3 (Leaf node):");
// tree.delete(3);
// tree.inOrder(tree.root); // Should not include 3

// console.log("Delete 10 (Root node):");
// tree.delete(10);
// tree.inOrder(tree.root); // Should not include 10

// console.log("Final Tree (InOrder):");
// tree.inOrder(tree.root); // Remaining nodes


class graph{
    constructor(){
        this.adjancencyList = {}
    }

    addVertex(vertex){
        if(!this.adjancencyList[vertex]){
            this.adjancencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjancencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjancencyList[vertex2]){
            this.addVertex(vertex2)
        }
        
        this.adjancencyList[vertex1].add(vertex2)
        this.adjancencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        if(!this.adjancencyList[vertex1] || !this.adjancencyList[vertex2]){
            return 'invalid vertex'
        }

        return this.adjancencyList[vertex1].has(vertex2) && this.adjancencyList[vertex2].has(vertex1)
    }

    print(){
        for(let vertex in this.adjancencyList){
            console.log(`${vertex} => ${[...this.adjancencyList[vertex]]}`)
        }
    }

    removeEdge(vertex1,vertex2){
        if(!this.adjancencyList[vertex1] || !this.adjancencyList[vertex2]){
            return "invalid vertex"
        }

        this.adjancencyList[vertex1].delete(vertex2)
        this.adjancencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjancencyList[vertex]){
            return 'invalid vertex'
        }

        for(let adjancyVertex of this.adjancencyList[vertex]){
            this.removeEdge(vertex,adjancyVertex)
        }

        delete this.adjancencyList[vertex]

        return 'deleted'
    }

    bfs(start){
        let queue = []

        queue.push(start)

        let visitedNode = new Set()

        visitedNode.add(start)

        while(queue.length){
            let vertex = queue.shift()

            console.log(vertex)

            this.adjancencyList[vertex].forEach((neighbor)=>{
                if(!visitedNode.has(neighbor)){
                    visitedNode.add(neighbor)
                    queue.push(neighbor)
                }
            })
        }
    }

    dfs(start,visitedNode = new Set()){
        visitedNode.add(start)

        console.log(start)

        this.adjancencyList[start].forEach((neighbor)=>{
            if(!visitedNode.has(neighbor)){
                this.dfs(neighbor,visitedNode)
            }
        })
    }

    bfsCycleDetection(start){
        let queue = []

        queue.push({vertex:start,parent:null})

        let visitedNode = new Set()
        visitedNode.add(start)

        while(queue.length){
            let {vertex,parent} = queue.shift()

            for(let neighbor of this.adjancencyList[vertex]){
                if(!visitedNode.has(neighbor)){
                    visitedNode.add(neighbor)
                    queue.push({vertex:neighbor,parent:vertex})
                }else if(neighbor != parent){
                    return 'cycle detected'
                }
            }
        }
        return 'no cycle detected'
    }

    dfsCycleDetection(start,visitedNode=new Set(),parent = null){
        visitedNode.add(start)

        for(let neighbor of this.adjancencyList[start]){
            if(!visitedNode.has(neighbor)){
                if(this.dfsCycleDetection(neighbor,visitedNode,start)){
                    return true
                }
            }else if(neighbor != parent){
                return true
            }
        }

        return false
    }
}

const g = new graph();

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('D', 'E');
g.addEdge('E', 'B'); // Creates a cycle

console.log("Graph:");
g.print();

console.log("\nHas Edge A-B:", g.hasEdge('A', 'B')); // true
console.log("Has Edge A-D:", g.hasEdge('A', 'D')); // false
console.log("Has Edge X-Y:", g.hasEdge('X', 'Y')); // invalid vertex

console.log("\nBFS from A:");
g.bfs('A');

console.log("\nDFS from A:");
g.dfs('A');

console.log("\nCycle Detection (BFS):", g.bfsCycleDetection('A')); // cycle detected
console.log("Cycle Detection (DFS):", g.dfsCycleDetection('A') ? "cycle detected" : "no cycle");

console.log("\nRemove Edge D-E:");
g.removeEdge('D', 'E');
g.print();

console.log("\nRemove Vertex B:");
console.log(g.removeVertex('B'));
g.print();
