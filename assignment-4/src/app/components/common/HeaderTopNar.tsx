'use client';

import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitch from '../ThemeSwitch';

const HeaderTopNar = () => {
  return (
    <header className="border-b border-slate-200 bg-gradient-to-r from-blue-900 via-red-500 to-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex h-[50px] items-center justify-between md:h-[80px]`}
        >
          <Link href="/" className="p-2 text-2xl font-bold">
            Book store
          </Link>
          <div className="flex items-center gap-x-4">
            <ThemeSwitch/>
            <div className="flex items-center gap-x-2">
              <Image
                src="/header/avatar.jpg"
                alt="CR7 icons"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>@Cristiano</span>
            </div>
          </div>
        </div>
      </div>


    </header>
  )
}

export default HeaderTopNar
