import { FC } from 'react'
import Link from 'next/link'
import { BookType } from '../../model/Types'
import BookManager from '../../utils/BookManager'
import NotificationManager from '../../utils/NotificationManager'
import { useRouter } from 'next/navigation'
import { Notification } from '../hooks/Notification'

interface BookProps {
  book: BookType;
}

const ItemBook: FC<BookProps> = ({ book }) => {

  const { toaster, showToast, clearToast } = Notification();
  const router = useRouter();

  const handleDeleteClick = (book) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this book?');

    if (confirmDelete) {
      deleteBook(book); // Call the deleteBook function if the user confirms
    }
  };

  const deleteBook = async (book) => {
    if (!book) return;
    try {
      const response = await BookManager.delete(book);
      if (response.status) {
        NotificationManager.create({
          category: 'success',
          message: response.message,
        });
        router.replace('/');
      } else {
        NotificationManager.create({
          category: 'success',
          message: response.message,
        });
        showToast();
      }

      window.location.href = '/';

    } catch (error) {
      NotificationManager.create({
        category: 'error',
        message: error,
      });
    }
  };

  return (
    <tr className="border-b dark:border-gray-700">
      <th className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-500">
        {book.name}
      </th>
      <td className="px-4 py-3 border border-slate-500">{book.author}</td>
      <td className="px-4 py-3 border border-slate-500">{book.topic}</td>
      <td className="px-4 py-3 border border-slate-500 flex">
        <Link
          href="#"
          className="text-red-500 hover:underline"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default link behavior
            handleDeleteClick(book); // Call the deleteBook function
          }}
        >
          Delete
        </Link>
        |
        <Link
          href={`/books/${book.id}`}
          className="text-red-500 hover:underline"
        >
          Detail
        </Link>
      </td>
    </tr>
  )
}

export default ItemBook
