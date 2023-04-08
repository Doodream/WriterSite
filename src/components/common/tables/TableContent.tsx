import { ReactNode } from 'react'

export type TableColumnType = {
  title: ReactNode
  key: string
}

export type TableContentsType = {
  row: {
    content: ReactNode
    key: string
  }[]
}

type TableContentProps = {
  columns: TableColumnType[]
  contents?: TableContentsType[]
}

const TableContent = ({ columns, contents }: TableContentProps): JSX.Element => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          {columns.map((column) => {
            return (
              <th key={column.key}>
                <div className="flex flex-col items-center">{column.title}</div>
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {contents?.map((content, index) => {
          return (
            <tr key={index} className="active">
              {columns.map((column, index) => {
                const rowColumnMatchItem = content.row.find((item) => item.key === column.key)
                return (
                  <td key={index}>
                    <div className="flex flex-col items-center">
                      {rowColumnMatchItem ? rowColumnMatchItem.content : ''}
                    </div>
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableContent
