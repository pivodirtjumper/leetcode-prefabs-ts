class StackNode<T> { 
    public next: StackNode<T> | null;

    public constructor(public payload: T) {}
}

class Stack<T> {

    private head: StackNode<T> | null = null;
    private size: number = 0;

    public push(element: T): void {
        let node = new StackNode<T>(element);

        if (this.head != null) {
            node.next = this.head;
        } 

        this.head = node;
        this.size++;
    }

    public pop(): T {
        if (this.head == null) {
            throw new Error("Stack is empty!");
        }
        let res: T = this.head.payload;
        this.head = this.head.next;
        this.size--;
        return res;
    }

    public peek(): T {
        if (this.head == null) {
            throw new Error("Stack is empty!");
        }
        return this.head.payload;
    }

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.size == 0;
    }
}

export default Stack;