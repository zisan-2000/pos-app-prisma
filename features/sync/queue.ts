const queue: unknown[] = [];

export function enqueue(item: unknown) {
  queue.push(item);
}

export function flushQueue() {
  return queue.splice(0, queue.length);
}

