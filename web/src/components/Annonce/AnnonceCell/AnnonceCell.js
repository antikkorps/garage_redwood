import Annonce from 'src/components/Annonce/Annonce'

export const QUERY = gql`
  query FindAnnonceById($id: Int!) {
    annonce: annonce(id: $id) {
      id
      title
      description
      kilometrage
      yearofcirculation
      price
      published
      authorId
      createdAt
      Equipment {
        id
        name
      }
      Image {
        id
        name
        url
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Annonce not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ annonce }) => {
  return <Annonce annonce={annonce} />
}
