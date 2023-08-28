import Deque from "./deque";

describe('Deque', () => {
  let deque: Deque<number>;

  beforeEach(() => {
    deque = new Deque<number>();
  });

  it('should offer and poll elements from the front of the deque', () => {
    deque.offerFirst(3);
    deque.offerFirst(2);
    deque.offerFirst(1);

    expect(deque.pollFirst()).toBe(1);
    expect(deque.pollFirst()).toBe(2);
    expect(deque.pollFirst()).toBe(3);
    expect(deque.getSize()).toBe(0);
  });

  it('should offer and poll elements from the end of the deque', () => {
    deque.offerLast(1);
    deque.offerLast(2);
    deque.offerLast(3);

    expect(deque.pollLast()).toBe(3);
    expect(deque.pollLast()).toBe(2);
    expect(deque.pollLast()).toBe(1);
    expect(deque.getSize()).toBe(0);
  });


  it('should offer and poll elements from both ends of the deque', () => {
    deque.offerLast(1);
    deque.offerLast(2);
    deque.offerLast(3);
    deque.offerFirst(0);

    expect(deque.pollFirst()).toBe(0);
    expect(deque.pollFirst()).toBe(1);
    expect(deque.pollFirst()).toBe(2);
    expect(deque.pollFirst()).toBe(3);
    expect(deque.getSize()).toBe(0);
    expect(deque.isEmpty()).toBe(true);
  });
  it('should throw an error when trying to poll from an empty deque', () => {
    expect(() => deque.pollFirst()).toThrowError('Deque is empty!');
    expect(() => deque.pollLast()).toThrowError('Deque is empty!');
  });

  it('should return the correct size of the deque', () => {
    deque.offerFirst(1);
    deque.offerFirst(2);
    deque.offerLast(3);

    expect(deque.getSize()).toBe(3);

    deque.pollFirst();
    expect(deque.getSize()).toBe(2);

    deque.pollLast();
    expect(deque.getSize()).toBe(1);
  });

  it('should return true when deque is empty, and false otherwise', () => {
    expect(deque.isEmpty()).toBe(true);

    deque.offerFirst(1);
    expect(deque.isEmpty()).toBe(false);

    deque.pollFirst();
    expect(deque.isEmpty()).toBe(true);
  });
});
