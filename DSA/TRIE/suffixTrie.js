class Node{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
}

class suffixTrie{
    constructor(word){
        this.root=new Node()
        this.buildSuffixTrie(word)
    }

    buildSuffixTrie(word){
        for(let i=0;i<word.length;i++){
            this.insert(word.slice(i))
        }
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

        return true
    }
}

const s = new suffixTrie("banana");

console.log(s.search("ana")); 
console.log(s.search("ban"));  
console.log(s.search("apple")); 