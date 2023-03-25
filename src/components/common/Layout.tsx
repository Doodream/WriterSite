import React, { PropsWithChildren } from 'react'
import Header from '@/components/common/Header'
import SideBar from '@/components/common/SideBar'

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className="drawer font-['KoddiUDOnGothic']">
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Header />
        <main className="h-screen w-screen bg-white">
          <div>{children}</div>
        </main>
      </div>
      <SideBar />
    </div>
  )
}

export default Layout
