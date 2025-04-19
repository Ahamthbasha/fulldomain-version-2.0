class heap{
    constructor(){
        this.heap=[]
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftIndex(index){
        return 2 * index + 1
    }

    getRightIndex(index){
        return 2 * index + 2
    }

    getParent(index){
        return this.heap[this.getParentIndex(index)]
    }

    getLeftChild(index){
        return this.heap[this.getLeftIndex(index)]
    }

    getRightChild(index){
        return this.heap[this.getRightIndex(index)]
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0
    }

    hasLeftChild(index){
        return this.getLeftIndex(index) < this.heap.length
    }

    hasRightChild(index){
        return this.getRightIndex(index) < this.heap.length
    }

    swap(index1,index2){
        let temp=this.heap[index1]
        this.heap[index1]=this.heap[index2]
        this.heap[index2]=temp
    }

    peek(){
        if(this.heap.length == 0){
            return 'heap empty'
        }

        return this.heap[0]
    }

    print(){
        console.log(this.heap)
    }

    add(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let index=this.heap.length-1

        while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
            this.swap(this.getParentIndex(index),index)
            index=this.getParentIndex(index)
        }
    }

    remove(){
        if(this.heap.length == 0){
            return 'heap empty'
        }

        let val=this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown()
        return val
    }

    heapifyDown(){
        let index=0

        while(this.hasLeftChild(index)){
            let smallerIndex=this.getLeftIndex(index)

            if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
                smallerIndex=this.getRightIndex(index)
            }

            if(this.heap[index] < this.heap[smallerIndex]){
                break
            }
            else{
                this.swap(index,smallerIndex)
            }

            index=smallerIndex
        }
    }

    heapSort(arr){
        const h=new heap()

        for(let i=0;i<arr.length;i++){
            h.add(arr[i])
        }

        let sortedArr=[]

        while(h.heap.length){
            sortedArr.push(h.remove())
        }

        return sortedArr
    }

    findKthLargest(arr,k){
        const h=new heap()
        for(let i=0;i<arr.length;i++){
            h.add(arr[i])
            if(h.heap.length > k){
                h.remove()
            }
        }

        return h.peek()
    }
}

const h=new heap()

h.add(10);
h.add(5);
h.add(3);
h.add(1);
h.print(); // [1, 5, 3, 10]

h.remove();
h.print(); // [3, 5, 10]

console.log(h.heapSort([1, 9, 10, 4, 5])); // [1, 4, 5, 9, 10]

console.log(h.findKthLargest([1,9,10,4,5],3));