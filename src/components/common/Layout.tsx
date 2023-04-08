import React, { PropsWithChildren } from 'react'
import SideBar from '@/components/common/SideBar'

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <main className="flex w-screen bg-white font-['KoddiUDOnGothic']">
      <SideBar />
      <div className="w-full">{children}</div>
    </main>
  )
}

export default Layout
