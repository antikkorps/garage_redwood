import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

const DELETE_ANNONCE_MUTATION = gql`
  mutation DeleteAnnonceMutation($id: Int!) {
    deleteAnnonce(id: $id) {
      id
    }
  }
`

const Annonce = ({ annonce }) => {
  const [deleteAnnonce] = useMutation(DELETE_ANNONCE_MUTATION, {
    onCompleted: () => {
      toast.success('Annonce deleted')
      navigate(routes.annonces())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete annonce ' + id + '?')) {
      deleteAnnonce({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Annonce {annonce.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{annonce.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{annonce.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{annonce.description}</td>
            </tr>
            <tr>
              <th>Kilometrage</th>
              <td>{annonce.kilometrage}</td>
            </tr>
            <tr>
              <th>Yearofcirculation</th>
              <td>{annonce.yearofcirculation}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{annonce.price}</td>
            </tr>
            <tr>
              <th>Published</th>
              <td>{checkboxInputTag(annonce.published)}</td>
            </tr>
            <tr>
              <th>Author id</th>
              <td>{annonce.authorId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(annonce.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAnnonce({ id: annonce.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(annonce.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Annonce
