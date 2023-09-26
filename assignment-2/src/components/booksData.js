const defaultBooks = [
    { id: 1, title: "Example 1", author: "Kevin A", topic: "Topic A" },
    { id: 2, title: "Example 2", author: "Kevin A", topic: "Topic A" },
    { id: 3, title: "Example 3", author: "Kevin A", topic: "Topic A" },
    { id: 4, title: "Example 4", author: "Kevin A", topic: "Topic A" },
    { id: 5, title: "Example 5", author: "Kevin A", topic: "Topic A" },
    { id: 6, title: "Example 6", author: "Kevin A", topic: "Topic A" }
];

const storedBooks = JSON.parse(localStorage.getItem("books"));
const booksData = storedBooks || defaultBooks;

export default booksData;
