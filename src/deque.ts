class DequeNode<T> {
    public prev: DequeNode<T> | null;
    public next: DequeNode<T> | null;

    public constructor(public payload: T) {}
}

class Deque<T> {

    private head: DequeNode<T> | null;
    private tail: DequeNode<T> | null;
    private size: number = 0;


    public offerFirst(element: T): void {
        let node = new DequeNode<T>(element);
        if (this.head == null) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    public offerLast(element: T): void {
        let node = new DequeNode<T>(element);
        if (this.tail == null) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    public pollFirst(): T {
        if (this.size == 0) {
            throw new Error("Deque is empty!");
        }
        let res: T = this.head!.payload;
        if (this.size > 1) {
            let next = this.head!.next;
            next!.prev = null;
            this.head = next;
        } else {
            this.head = this.tail = null;
        }
        this.size--;
        return res;
    }

    public pollLast(): T {
        if (this.size == 0) {
            throw new Error("Deque is empty!");
        }
        let res: T = this.tail!.payload;
        if (this.size > 1) {
            let prev = this.tail!.prev;
            prev!.next = null;
            this.tail = prev;
        } else {
            this.head = this.tail = null;
        }
        this.size--;
        return res;
    }

    public peekLast(): T {
        if (this.size == 0) {
            throw new Error("Deque is empty!");
        }
        return this.tail!.payload;
    }

    public peekFirst(): T {
        if (this.size == 0) {
            throw new Error("Deque is empty!");
        }
        return this.head!.payload;
    }

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean { 
        return this.size == 0;
    }
}

export default Deque;