import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return <div className="absolute h-[100vh] w-[100vw]">{children}</div>
}

export default Layout
