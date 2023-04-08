import { PropsWithChildren } from 'react'

type TableTitle = {
  title?: string
  rightSide?: JSX.Element
  leftSide?: JSX.Element
}

const TableTitle = ({ children, title }: PropsWithChildren<TableTitle>) => {
  return (
    <div className="flex w-full items-center justify-between gap-2 pb-10">
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  )
}

export default TableTitle
