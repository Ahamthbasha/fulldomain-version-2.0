class Node{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
}

class trie{
    constructor(){
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

    countWord(){
        let queue=[]
        queue.push(this.root)
        let c=0
        while(queue.length){
            let node=queue.shift()

            if(node.isEndOfWord){
                c++
            }

            for(let char in node.children){
                queue.push(node.children[char])
            }
        }
        return c
    }

    longestPrefix(word){
        let node=this.root
        let longestPrefix=''
        let currentPrefix=''

        for(let char of word){
            if(!node.children[char]){
                break
            }

            node=node.children[char]

            currentPrefix+=char

            if(node.isEndOfWord){
                longestPrefix=currentPrefix
                break
            }
        }
        return longestPrefix
    }

    countPrefix(word){
        let node=this.root
        let c=0
        for(let char of word){
            if(!node.children[char]){
                break
            }
            node=node.children[char]
            c++
        }
        return c
    }
}

const t=new trie()

t.insert("cat");
t.insert("car");
t.insert("bat");
t.insert("burger");
t.insert("batter");

console.log(t.countWord());      
console.log(t.longestPrefix("batter")); 
console.log(t.countPrefix("ba")); 