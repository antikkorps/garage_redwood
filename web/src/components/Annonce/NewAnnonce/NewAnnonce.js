import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AnnonceForm from 'src/components/Annonce/AnnonceForm'

const CREATE_ANNONCE_MUTATION = gql`
  mutation CreateAnnonceMutation($input: CreateAnnonceInput!) {
    createAnnonce(input: $input) {
      id
    }
  }
`

const NewAnnonce = () => {
  const [createAnnonce, { loading, error }] = useMutation(
    CREATE_ANNONCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Annonce created')
        navigate(routes.annonces())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createAnnonce({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Annonce</h2>
      </header>
      <div className="rw-segment-main">
        <AnnonceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAnnonce
