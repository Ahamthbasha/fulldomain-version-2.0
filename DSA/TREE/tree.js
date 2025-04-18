class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}

class bst{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left == null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right == null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return null
        }
        else if(root.value == value){
            return true
        }
        else if(value < root.value){
            return this.search(root.left,value)
        }
        else{
            return this.search(root.right,value)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        let queue=[]
        queue.push(this.root)

        while(queue.length > 0){
            let cur=queue.shift()
            if(cur){
                console.log(cur.value)
                if(cur.left){
                    queue.push(cur.left)
                }
                if(cur.right){
                    queue.push(cur.right)
                }
            }
        }
    }

    min(root){
        if(!root){
            return null
        }

        while(root.left){
            root=root.left
        }

        return root.value
    }

    max(root){
        if(!root){
            return null
        }

        while(root.right){
            root=root.right
        }

        return root.value
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(!root){
            return null
        }

        if(value < root.value){
            root.left=this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right=this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }

            if(!root.right){
                return root.left
            }

            if(!root.left){
                return root.right
            }

            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }

    isPrime(num){
        if(num <= 1){
            return false
        }

        for(let i=2;i<=Math.sqrt(num);i++){
            if( num % i == 0){
                return false
            }
        }

        return true
    }

    findPrimeNo(root,result=[]){
        if(root){
            this.findPrimeNo(root.left,result)
            if(this.isPrime(root.value)){
                result.push(root.value)
            }
            this.findPrimeNo(root.right,result)
        }
        return result
    }
}

const b=new bst()

b.insert(10);
b.insert(5);
b.insert(15);
b.insert(3);
b.insert(7);
b.insert(12);
b.insert(18);

//search works
// console.log(b.search(b.root,20))
// console.log(b.search(b.root,18))

//DFS

// b.preOrder(b.root)
// b.inOrder(b.root)
// b.postOrder(b.root)

//BFS

// b.levelOrder()

//minimum and maximum

// console.log(b.min(b.root))
// console.log(b.max(b.root))

//deletion

// b.levelOrder()

// b.delete(5)
// console.log("After")
// b.levelOrder()

console.log(b.findPrimeNo(b.root))