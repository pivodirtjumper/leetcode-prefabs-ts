import PriorityQueue, { PrimitiveComparator, ReversePrimitiveComparator } from "./priority-queue";

describe('PrimitiveComparator', () => {
  it('should compare numbers correctly', () => {
    expect(PrimitiveComparator(2, 3)).toBe(-1);
    expect(PrimitiveComparator(3, 2)).toBe(1);
    expect(PrimitiveComparator(5, 5)).toBe(0);
  });

  it('should compare strings correctly', () => {
    expect(PrimitiveComparator('apple', 'banana')).toBe(-1);
    expect(PrimitiveComparator('banana', 'apple')).toBe(1);
    expect(PrimitiveComparator('apple', 'apple')).toBe(0);
  });

  it('should compare booleans correctly', () => {
    expect(PrimitiveComparator(true, false)).toBe(1);
    expect(PrimitiveComparator(false, true)).toBe(-1);
    expect(PrimitiveComparator(true, true)).toBe(0);
  });

  it('should compare bigints correctly', () => {
    expect(PrimitiveComparator(BigInt(10), BigInt(20))).toBe(-1);
    expect(PrimitiveComparator(BigInt(20), BigInt(10))).toBe(1);
    expect(PrimitiveComparator(BigInt(15), BigInt(15))).toBe(0);
  });

  it('should compare floating-point numbers correctly', () => {
    expect(PrimitiveComparator(1.5, 2.5)).toBe(-1);
    expect(PrimitiveComparator(2.5, 1.5)).toBe(1);
    expect(PrimitiveComparator(3.0, 3.0)).toBe(0);
  });
});

describe('ReversePrimitiveComparator', () => {
  it('should compare numbers correctly', () => {
    expect(ReversePrimitiveComparator(2, 3)).toBe(1);
    expect(ReversePrimitiveComparator(3, 2)).toBe(-1);
    expect(ReversePrimitiveComparator(5, 5)).toBe(0);
  });

  it('should compare strings correctly', () => {
    expect(ReversePrimitiveComparator('apple', 'banana')).toBe(1);
    expect(ReversePrimitiveComparator('banana', 'apple')).toBe(-1);
    expect(ReversePrimitiveComparator('apple', 'apple')).toBe(0);
  });

  it('should compare booleans correctly', () => {
    expect(ReversePrimitiveComparator(true, false)).toBe(-1);
    expect(ReversePrimitiveComparator(false, true)).toBe(1);
    expect(ReversePrimitiveComparator(true, true)).toBe(0);
  });

  it('should compare bigints correctly', () => {
    expect(ReversePrimitiveComparator(BigInt(10), BigInt(20))).toBe(1);
    expect(ReversePrimitiveComparator(BigInt(20), BigInt(10))).toBe(-1);
    expect(ReversePrimitiveComparator(BigInt(15), BigInt(15))).toBe(0);
  });

  it('should compare floating-point numbers correctly', () => {
    expect(ReversePrimitiveComparator(1.5, 2.5)).toBe(1);
    expect(ReversePrimitiveComparator(2.5, 1.5)).toBe(-1);
    expect(ReversePrimitiveComparator(3.0, 3.0)).toBe(0);
  });
});

describe('PriorityQueue', () => {
    it('should enqueue and dequeue items based on priority', () => {
      const pq = new PriorityQueue<number>(PrimitiveComparator); // Example: min-heap for numbers
  
      pq.enqueue(5);
      pq.enqueue(3);
      pq.enqueue(8);
      pq.enqueue(2);
      pq.enqueue(10);
  
      expect(pq.dequeue()).toBe(2);
      expect(pq.dequeue()).toBe(3);
      expect(pq.dequeue()).toBe(5);
      expect(pq.dequeue()).toBe(8);
      expect(pq.dequeue()).toBe(10);
    });
  
    it('should return the correct length of the priority queue', () => {
      const pq = new PriorityQueue<string>(PrimitiveComparator); // Example: min-heap for string length
  
      pq.enqueue('apple');
      pq.enqueue('banana');
      pq.enqueue('cherry');
  
      expect(pq.length()).toBe(3);
  
      pq.dequeue();
      expect(pq.length()).toBe(2);
    });
  
    it('should throw an error when trying to dequeue from an empty queue', () => {
      const pq = new PriorityQueue<number>(PrimitiveComparator);
  
      expect(() => pq.dequeue()).toThrowError('Cannot dequeue from empty queue.');
    });
});