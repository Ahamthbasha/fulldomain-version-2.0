class Node{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
}

class trie{
    constructor() {
        this.root=new Node()
    }

    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node=node.children[char]
        }

        node.isEndOfWord=true
    }

    search(word){
        let node=this.root

        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }

        return node.isEndOfWord
    }

    startsWith(prefix){
        let node=this.root

        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }

        return true
    }

    autoComplete(word){
        let node=this.root

        for(let char of word){
            if(!node.children[char]){
                return []
            }
            node=node.children[char]
        }

        let list=[]

        this.collectWord(node,word,list)
        return list
    }

    collectWord(node,word,list){
        if(node.isEndOfWord){
            list.push(word)
        }

        for(let char in node.children){
            this.collectWord(node.children[char],word+char,list)
        }
        
    }

    print(){
        let list=[]
        this.collectWord(this.root,'',list)
        console.log(list)
    }

    delete(word){
        let node=this.root
        let path=[]
        for(let char of word){
            if(!node.children[char]){
                return 'no matching'
            }
            path.push([node,char])
            node=node.children[char]
        }

        if(node.isEndOfWord){
            node.isEndOfWord=false
        }

        for(let i=word.length-1;i>=0;i--){
            let [parentNode,char] = path[i]
            let childNode = parentNode.children[char]
            if(Object.keys(childNode.children).length > 0 || childNode.isEndOfWord){
                break
            }

            delete parentNode.children[char]
        }
    }
}

const t=new trie()

t.insert("apple")
t.insert("app")
t.insert("banana")
t.insert("bat")
t.insert("batman")

console.log(t.search("apple"));  // true
console.log(t.search("app"));    // true
console.log(t.search("batman"));// true
console.log(t.search("ban")); 

console.log(t.startsWith("ba")); // true

console.log(t.autoComplete("ba")); // ["banana", "bat", "batman"]

t.print();  

t.delete("app");

console.log("After Deletion:");
t.print(); 

