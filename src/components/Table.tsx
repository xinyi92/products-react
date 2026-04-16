import type { ProductModel } from "../models/products"

interface Props {
  data: ProductModel[]
}

export default function Table({ data }: Props) {
  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? data.map(item => (
          <tr key={item.id}>
            <td style={{textAlign: 'center'}}>{item.id}</td>
            <td>{item.title}</td>
            <td style={{textAlign: 'right'}}>{item.price}</td>
          </tr>
        )) : <tr><td colSpan={3} style={{textAlign: 'center'}}>No Data</td></tr>}
      </tbody>
    </table>
  )
}