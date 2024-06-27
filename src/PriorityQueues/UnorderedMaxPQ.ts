class UnorderedMaxPQ<T> {
  private pq: (T | null)[];
  private N: number = 0;

  constructor(capacity: number) {
    this.pq = new Array<T>(capacity);
  }

  public isEmpty(): boolean {
    return this.N === 0;
  }

  public insert(x: T): void {
    this.pq[this.N++] = x;
  }

  public delMax(): T | null {
    if (this.isEmpty()) {
      throw new Error("The priority queue is empty!");
    }

    let maxIdx = 0;
    for (let i = 1; i < this.N; i++) {
      if (this.pq[maxIdx]! < this.pq[i]!) {
        maxIdx = i;
      }
    }

    const max = this.pq[maxIdx];
    this.pq[maxIdx] = this.pq[this.N - 1];
    this.pq[this.N - 1] = null;
    this.N--;

    return max;
  }
}

const maxPQ = new UnorderedMaxPQ<number>(10);

maxPQ.insert(10);
maxPQ.insert(11);
console.log(maxPQ.delMax());
console.log(maxPQ.delMax());