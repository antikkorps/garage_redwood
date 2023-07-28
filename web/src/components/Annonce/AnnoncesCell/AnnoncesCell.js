import { Link, routes } from '@redwoodjs/router'

import Annonces from 'src/components/Annonce/Annonces'

export const QUERY = gql`
  query FindAnnonces {
    annonces {
      id
      title
      description
      kilometrage
      yearofcirculation
      price
      published
      authorId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No annonces yet. '}
      <Link to={routes.newAnnonce()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ annonces }) => {
  return <Annonces annonces={annonces} />
}
