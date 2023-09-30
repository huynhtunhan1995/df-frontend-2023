interface Book {
    id: number;
    title: string;
    author: string;
    topic: string;
}

const defaultBooks: Book[] = [
    { id: 1, title: "Example 1", author: "Kevin A", topic: "Topic A" },
    { id: 2, title: "Example 2", author: "Kevin A", topic: "Topic A" },
    { id: 3, title: "Example 3", author: "Kevin A", topic: "Topic A" },
    { id: 4, title: "Example 4", author: "Kevin A", topic: "Topic A" },
    { id: 5, title: "Example 5", author: "Kevin A", topic: "Topic A" },
    { id: 6, title: "Example 6", author: "Kevin A", topic: "Topic A" }
];

const storedBooksJSON = localStorage.getItem("books");
const storedBooks: Book[] | null = storedBooksJSON ? JSON.parse(storedBooksJSON) : null;
const booksData: Book[] = storedBooks || defaultBooks;

export default booksData;
