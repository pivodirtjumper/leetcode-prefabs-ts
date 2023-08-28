import Stack from "./stack";

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it('should push and pop elements from the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.getSize()).toBe(0);
  });

  it('should throw an error when trying to pop from an empty stack', () => {
    expect(() => stack.pop()).toThrowError('Stack is empty!');
  });

  it('should return the correct size of the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.getSize()).toBe(3);

    stack.pop();
    expect(stack.getSize()).toBe(2);

    stack.pop();
    expect(stack.getSize()).toBe(1);
  });

  it('should return true when the stack is empty, and false otherwise', () => {
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    expect(stack.isEmpty()).toBe(false);

    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});
