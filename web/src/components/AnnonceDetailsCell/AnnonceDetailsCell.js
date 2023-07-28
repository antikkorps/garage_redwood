import AnnonceDetails from '../AnnonceDetails/AnnonceDetails'

export const QUERY = gql`
  query AnnonceDetailsQuery($id: Int!) {
    annonceDetails: annonce(id: $id) {
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
        featuredImage
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ annonceDetails }) => {
  return (
    <>
      <AnnonceDetails annonceDetails={annonceDetails} />
    </>
  )
}
