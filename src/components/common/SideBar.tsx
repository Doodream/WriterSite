import React from 'react'
import Link from 'next/link'

const SideBar = () => {
  return (
    <aside className="flex h-screen w-[350px] flex-col py-[20px] pl-[20px]">
      <h1 className="text-xl font-bold">노예주 | Yeju Roh</h1>
      <nav className="flex h-full flex-col ">
        <div className="flex h-[15%] flex-col justify-end">
          <Link href="/" className="">
            CV
          </Link>
          <Link href="/">WORKS</Link>
        </div>
        <div className="flex h-[65%] flex-col justify-end">
          <Link href="/" className="">
            NOTES
          </Link>
          <Link href="/">DRAWINGS</Link>
        </div>
        <div className="flex h-[20%] flex-col justify-end ">
          <Link href="/" className="">
            EXHIBITION
          </Link>
          <Link href="/">PROJECT</Link>
          <Link href="/">PUBLICATION</Link>
        </div>
      </nav>
      <div className="mt-[100px] flex flex-col">
        <a href="mailto:shdpwn@gmail.com">shdpwn@gmail.com</a>
        <a href="https://www.instagram.com/yeju_roh/">@yeju_roh</a>
      </div>
    </aside>
  )
}

export default SideBar
