import React, { useEffect, useState } from 'react';
import booksData from './booksData';
import NewBookModal from './NewBookModal';

interface Book {
  id: number;
  title: string;
  author: string;
  topic: string;
}

function BookList(props): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;
  const [books, setBooks] = useState<Book[]>(booksData);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const filteredBooks: Book[] = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const booksToDisplay: Book[] = filteredBooks.slice(startIndex, endIndex);

  const handleDelete = (id: number): void => {
    const confirmDelete: boolean = window.confirm('Are you sure you want to delete this book?');
    if (confirmDelete) {
      const updatedBooks: Book[] = books.filter(book => book.id !== id);
      setBooks(updatedBooks);
    }
  };

  const handleAddBook = (newBook: Book): void => {
    setBooks([...books, newBook]);
    setIsModalOpen(false); // Close the modal after adding a book
  };

  return (
    <div>
      <div className="d-flex justify-content-end">
        <input
          type="text"
          placeholder="Search Books"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Add Book</button>
      </div>

      <div>
        <table
          className={`table ${props.data ? 'table-dark' : ''}`}
        >
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
                  <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-end">
          <button className={`${currentPage === 1 ? 'button-link-disabled' : 'button-link'}`} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            {'PREVIOUS '}
          </button>
          <span>
            {currentPage}
          </span>
          <button className={`${endIndex >= filteredBooks.length ? 'button-link-disabled' : 'button-link'}`} onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= filteredBooks.length}>
            {' NEXT'}
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
