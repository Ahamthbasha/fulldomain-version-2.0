class graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }


    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
            return 'vertex1 or vertex2 is not found'
        }

        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }

    print(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} => ${[...this.adjacencyList[vertex]]}`)
        }
    }

    removeEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
            return 'invalid vertex'
        }

        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 'invalid vertex'
        }

        for(let adjancyVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjancyVertex)
        }

        delete this.adjacencyList[vertex]
    }

    bfs(start){
        let visitedNode = new Set()
        visitedNode.add(start)
        let queue = []
        queue.push(start)

        while(queue.length){
            let vertex = queue.shift()
            console.log(vertex)
            for(let neighbor of this.adjacencyList[vertex]){
                if(!visitedNode.has(neighbor)){
                    visitedNode.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
    }

    dfs(start,visitedNode=new Set()){
        visitedNode.add(start)
        console.log(start)

        for(let neighbor of this.adjacencyList[start]){
            if(!visitedNode.has(neighbor)){
                this.dfs(neighbor,visitedNode)
            }
        }
    }

    bfsCycleDetection(start){
        let visitedNode = new Set()
        visitedNode.add(start)

        let queue =[]
        queue.push({vertex:start,parent:null})

        while(queue.length){
            let {vertex,parent} = queue.shift()

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visitedNode.has(neighbor)){
                    visitedNode.add(neighbor)
                    queue.push({vertex:neighbor,parent:vertex})
                }
                else if(neighbor != parent){
                    return 'cycle detected in bfs'
                }
            }
        }
        return 'cycle not detected in bfs'
    }

    dfsCycleDetection(start,visitedNode=new Set(),parent=null){
        visitedNode.add(start)

        for(let neighbor of this.adjacencyList[start]){
            if(!visitedNode.has(neighbor)){
                if(this.dfsCycleDetection(neighbor,visitedNode,start)){
                    return true
                }
            }
            else if(neighbor != parent){
                return true
            }
        }
        return false
    }
}

const g = new graph()

// Add vertices and edges
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "C")  // Creates a cycle A-B-C-A

// Print the graph
g.print()

// Test hasEdge
console.log(g.hasEdge("A", "B")) // true
console.log(g.hasEdge("A", "D")) // vertex1 or vertex2 is not found

// Test BFS and DFS traversal
console.log("BFS:")
g.bfs("A") // A, B, C

console.log("DFS:")
g.dfs("A") // A, B, C or A, C, B depending on implementation

// Test cycle detection
console.log("Cycle detection BFS:", g.bfsCycleDetection("A")) // cycle detected in bfs
console.log("Cycle detection DFS:", g.dfsCycleDetection("A")) // true

// Test removeEdge
g.removeEdge("A", "B")
console.log(g.hasEdge("A", "B")) // false

// Test removeVertex
g.removeVertex("C")
g.print() // Should show only A and B now

// Test graph with no cycle
const g2 = new graph()
g2.addEdge("X", "Y")
g2.addEdge("Y", "Z")
console.log("Cycle detection:", g2.dfsCycleDetection("X")) // false
console.log("Cycle detection:", g2.bfsCycleDetection("X")) // cycle not detected in bfs
