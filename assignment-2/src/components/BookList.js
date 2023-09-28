import React, {useEffect, useState} from 'react';
import booksData from './booksData';
import NewBookModal from "./NewBookModal";

function BookList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [books, setBooks] = useState(booksData);

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const booksToDisplay = filteredBooks.slice(startIndex, endIndex);


    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this book?");
        if (confirmDelete) {
            const updatedBooks = books.filter(book => book.id !== id);
            setBooks(updatedBooks);
        }
    };


    const handleAddBook = (newBook) => {
        setBooks([...books, newBook]);
        setIsModalOpen(false); // Close the modal after adding a book
    };


    return (
        <div className="content">
            <div className="d-flex justify-content-end">
                <input
                    type="text"
                    placeholder="Search Books"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button onClick={() => setIsModalOpen(true)}>Add Book</button>


            </div>

            <div>
                <table>
                    <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Topic</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {booksToDisplay.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.topic}</td>
                            <td>
                                <button onClick={() => handleDelete(book.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="d-flex justify-content-end">
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>Page {currentPage}</span>
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= filteredBooks.length}>
                        Next
                    </button>
                </div>
            </div>

            <NewBookModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddBook={handleAddBook}
            />
        </div>
    );
}

export default BookList;
