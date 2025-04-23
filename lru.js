class Node {
    constructor(key, val) {
      this.key = key;
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.map = new Map();
      this.head = new Node(-1, -1);
      this.tail = new Node(-1, -1);
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }
  
    _addNode(node) {
      const temp = this.head.next;
      this.head.next = node;
      node.prev = this.head;
      node.next = temp;
      temp.prev = node;
    }
  
    _deleteNode(node) {
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }
  
    get(key) {
      if (!this.map.has(key)) return -1;
      const node = this.map.get(key);
      this._deleteNode(node);
      this._addNode(node);
      this.map.set(key, this.head.next);
      return node.val;
    }
  
    put(key, value) {
      if (this.map.has(key)) {
        const existingNode = this.map.get(key);
        this._deleteNode(existingNode);
        this.map.delete(key);
      }
      if (this.map.size === this.capacity) {
        const lruNode = this.tail.prev;
        this._deleteNode(lruNode);
        this.map.delete(lruNode.key);
      }
      const newNode = new Node(key, value);
      this._addNode(newNode);
      this.map.set(key, newNode);
    }
  }
  
  let cache;
  
  function initCache() {
    const capacity = parseInt(document.getElementById("capacity").value);
    cache = new LRUCache(capacity);
    displayCache();
    alert("Cache Initialized with capacity " + capacity);
  }
  
  function putItem() {
    const key = parseInt(document.getElementById("put-key").value);
    const value = parseInt(document.getElementById("put-value").value);
    if (isNaN(key) || isNaN(value)) return;
    cache.put(key, value);
    displayCache();
  }
  
  function getItem() {
    const key = parseInt(document.getElementById("get-key").value);
    const result = cache.get(key);
    document.getElementById("get-result").textContent = result === -1
      ? `Key ${key} not found.`
      : `Value: ${result}`;
    displayCache();
  }
  
  function displayCache() {
    const container = document.getElementById("cache-display");
    container.innerHTML = '';
    let current = cache.head.next;
    while (current !== cache.tail) {
      const div = document.createElement('div');
      div.className = 'cache-item';
      div.textContent = `Key: ${current.key} | Val: ${current.val}`;
      container.appendChild(div);
      current = current.next;
    }
  }
  
  