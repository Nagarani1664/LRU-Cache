# LRU-Cache
# 🧠 LRU Cache Visualizer (JavaScript + HTML + CSS)

A simple interactive web-based **Least Recently Used (LRU) Cache** implementation using JavaScript, complete with a visual interface to demonstrate how the cache updates on `PUT` and `GET` operations.

---

##  Features

- Visual representation of cache state (from most to least recently used)
- Supports dynamic cache initialization
- Handles `PUT` and `GET` operations via simple UI
- Displays real-time updates of cache eviction and access
- Fully responsive and beginner-friendly design

---

##Technologies Used
HTML5

CSS3

JavaScript
<h1>How It Works<h1>
The cache uses a doubly linked list + hashmap to support O(1) get() and put().

Most recently used entries are moved to the front of the list.

When capacity is exceeded, the least recently used entry (at the end) is evicted.



