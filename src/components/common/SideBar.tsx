import React from 'react'

const SideBar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="sidebar-drawer" className="drawer-overlay" />
      <ul className="menu flex h-full w-150 flex-col justify-between bg-base-100 pt-20 shadow-md">
        <li>
          <a>
            <span className="ml-20 text-30">YeJu</span>
          </a>
        </li>
        <div className="mb-20">
          <li>
            <a>
              <span className="ml-20 ">CV</span>
            </a>
          </li>
          <li>
            <a>
              <span className="ml-20 ">Critic / Review</span>
            </a>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default SideBar
