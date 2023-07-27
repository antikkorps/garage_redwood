import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AnnonceForm from 'src/components/Annonce/AnnonceForm'

export const QUERY = gql`
  query EditAnnonceById($id: Int!) {
    annonce: annonce(id: $id) {
      id
      title
      description
      kilometrage
      yearofcirculation
      featuredImage
      price
      published
      authorId
      createdAt
    }
  }
`
const UPDATE_ANNONCE_MUTATION = gql`
  mutation UpdateAnnonceMutation($id: Int!, $input: UpdateAnnonceInput!) {
    updateAnnonce(id: $id, input: $input) {
      id
      title
      description
      kilometrage
      yearofcirculation
      featuredImage
      price
      published
      authorId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ annonce }) => {
  const [updateAnnonce, { loading, error }] = useMutation(
    UPDATE_ANNONCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Annonce updated')
        navigate(routes.annonces())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateAnnonce({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Annonce {annonce?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AnnonceForm
          annonce={annonce}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
