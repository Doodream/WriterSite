import { Bars3Icon } from '@heroicons/react/20/solid'

const Header = () => {
  return (
    <header className="fixed z-10 flex h-100 w-full items-center gap-10 pl-50">
      <label htmlFor="sidebar-drawer" className="cursor-pointer">
        <Bars3Icon className="h-20 w-20 text-white" />
        {/*<h1 className="text-35 font-bold">YeJu</h1>*/}
      </label>
    </header>
  )
}

export default Header
