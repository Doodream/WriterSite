import TableContent from '@/components/common/tables/TableContent'
import TableTitle from '@/components/common/tables/TableTitle'
import { PropsWithChildren } from 'react'

const Table = ({ children }: PropsWithChildren) => {
  return <section className="card mt-6 w-full overflow-x-auto bg-base-100 p-6 shadow-xl">{children}</section>
}

export default Table

Table.Title = TableTitle
Table.Content = TableContent
