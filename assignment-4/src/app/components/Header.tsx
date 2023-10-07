import Link from 'next/link';
import { Search } from './Search';

export const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <div className="w-full md:w-1/3">
        <Search />
      </div>
      <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
        <Link
          href="/books/new"
          className="flex items-center justify-center text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >
          Add Book
        </Link>
      </div>
    </div>
  );
};
