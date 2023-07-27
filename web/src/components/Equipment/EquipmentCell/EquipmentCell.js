import Equipment from 'src/components/Equipment/Equipment'

export const QUERY = gql`
  query FindEquipmentById($id: Int!) {
    equipment: equipment(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Equipment not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ equipment }) => {
  return <Equipment equipment={equipment} />
}
