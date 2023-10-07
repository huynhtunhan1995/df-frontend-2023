'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export const Search = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const getStoredSearchTerm = () => {
    if (typeof localStorage === 'undefined') return ''
    return localStorage.getItem('query') || ''
  }

  const setStoredSearchTerm = (value: string) => {
    if (typeof localStorage === 'undefined') return
    localStorage.setItem('query', value)
  }

  const initialTerm = searchParams?.get('query') || getStoredSearchTerm()
  const [query, setTerm] = useState(initialTerm)

  const createQueryString = useCallback(

    (value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set('query', value)
      return params.toString()
    },
    [searchParams],
  )

  const handleSearch = useCallback(() => {
    router.push(`${pathname}?${createQueryString(query)}`)
  }, [createQueryString, pathname, query, router])

  useEffect(() => {
    setStoredSearchTerm(query)
    handleSearch()
  }, [handleSearch, query])

  return (
    <form className="flex items-center">
      <div className="relative w-full">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search books"
          onChange={(e) => {
            setTerm(e.target.value)
          }}
          value={query}
          required
        />
        <div className="absolute inset-y-0 right-1 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </form>
  )
}
