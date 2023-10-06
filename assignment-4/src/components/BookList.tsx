'use client'

import React, { useEffect, useState } from 'react'
import booksData from '../data/booksData'
import NewBookModal from './NewBookModal'

interface Book {
  id: number;
  title: string;
  author: string;
  topic: string;
}

function BookList(props): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage: number = 5
  const [books, setBooks] = useState<Book[]>(booksData)

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  const filteredBooks: Book[] = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const startIndex: number = (currentPage - 1) * itemsPerPage
  const endIndex: number = startIndex + itemsPerPage
  const booksToDisplay: Book[] = filteredBooks.slice(startIndex, endIndex)

  const handleDelete = (id: number): void => {
    const confirmDelete: boolean = window.confirm('Are you sure you want to delete this book?')
    if (confirmDelete) {
      const updatedBooks: Book[] = books.filter(book => book.id !== id)
      setBooks(updatedBooks)
    }
  }

  const handleAddBook = (newBook: Book): void => {
    setBooks([...books, newBook])
    setIsModalOpen(false) // Close the modal after adding a book
  }

  return (
      <div className="w-full mx-auto max-w-7xl px-4">
      <div className="flex justify-end">
        <input
          type="text"
          placeholder="Search Books"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded-md"
        />
        <button
          className="bg-blue-500 text-white py-1 px-2 ml-2 rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Add Book
        </button>
      </div>

      <div className={`py-3`}>
        <table className={`w-full border-collapse border border-gray-300 }`} >
          <thead>
          <tr>
            <th className={`p-2 border border-slate-500`}>#ID</th>
            <th className={`p-2 border border-slate-500`}>Name</th>
            <th className={`p-2 border border-slate-500`}>Author</th>
            <th className={`p-2 border border-slate-500`}>Topic</th>
            <th className={`p-2 border border-slate-500`}>Action</th>
          </tr>
          </thead>
          <tbody>
          {booksToDisplay.map(book => (
            <tr key={book.id}>
              <td className={`p-2 border border-slate-500`}>{book.id}</td>
              <td className={`p-2 border border-slate-500`}>{book.title}</td>
              <td className={`p-2 border border-slate-500`}>{book.author}</td>
              <td className={`p-2 border border-slate-500`}>{book.topic}</td>
              <td className={`p-2 border border-slate-500`}>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded-md"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>

        <div className="flex justify-end">
          <button
            className={`${
              currentPage === 1 ? 'opacity-50 pointer-events-none' : ''
            } text-blue-500 py-1 px-2`}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {'PREVIOUS '}
          </button>
          <span className="mx-2 my-2">{currentPage}</span>
          <button
            className={`${
              endIndex >= filteredBooks.length ? 'opacity-50 pointer-events-none' : ''
            } text-blue-500 py-1 px-2`}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={endIndex >= filteredBooks.length}
          >
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
  )
}

export default BookList
