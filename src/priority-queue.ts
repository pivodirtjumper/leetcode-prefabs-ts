class PriorityQueue<T>
{

    private heap: T[] = new Array<T>;
    

    public constructor(
        /**
         * Comparator  of priority queue. Negative value means arg0 should come before arg1
         */
        private comparator: (arg0: T, arg1: T) => number
    ) {}

    public enqueue(item: T) : void
    {
        this.heap.push(item);
        this.pushup(this.heap.length-1);
    }

    public dequeue(): T
    {
        if (this.heap.length == 0) {
            throw new Error("Cannot dequeue from empty queue.");
        }
        let value = this.heap[0];
        if (this.heap.length > 1) {
            this.heap[0] = this.heap.pop()!;
            this.pulldown(0);
        } else {
            this.heap.pop();
        }
        return value;
    }

    public length(): number
    {
        return this.heap.length;
    }

    private pushup(index: number): void
    {
        if (index == 0) return;
        let parentIndex = Math.floor((index-1)/2);
        if (this.comparator(this.heap[parentIndex], this.heap[index]) > 0) {
            this.swap(parentIndex, index);
            this.pushup(parentIndex);
        }
    }

    private pulldown(index: number): void
    {
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;
        if (leftIndex >= this.heap.length) {
            return ; // reached leaf node already
        }

        let compareIndex: number;
        if (rightIndex >= this.heap.length) {
            compareIndex = leftIndex; // Left index is the only existing
        } else {
            if (this.comparator(this.heap[leftIndex], this.heap[rightIndex]) > 0) {
                compareIndex = rightIndex;
            } else {
                compareIndex = leftIndex;
            }
        }

        if (this.comparator(this.heap[compareIndex], this.heap[index]) < 0) {
            this.swap(index, compareIndex);
            this.pulldown(compareIndex)
        }
    }

    private swap(index0: number, index1: number): void
    {
        let tmp:T = this.heap[index0];
        this.heap[index0] = this.heap[index1];
        this.heap[index1] = tmp;
    }

    public debug()
    {
        console.log(this.heap);
    }

}

export default PriorityQueue;
export const PrimitiveComparator = function<T>(arg0: T, arg1: T): number {
    if (arg0 == arg1) return 0;
    if (arg0 < arg1) return -1;
    return 1;
}
export const ReversePrimitiveComparator = function<T>(arg0: T, arg1: T): number {
    if (arg0 == arg1) return 0;
    if (arg0 > arg1) return -1;
    return 1;
}