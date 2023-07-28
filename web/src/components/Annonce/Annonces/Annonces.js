import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Annonce/AnnoncesCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

const DELETE_ANNONCE_MUTATION = gql`
  mutation DeleteAnnonceMutation($id: Int!) {
    deleteAnnonce(id: $id) {
      id
    }
  }
`

const AnnoncesList = ({ annonces }) => {
  const [deleteAnnonce] = useMutation(DELETE_ANNONCE_MUTATION, {
    onCompleted: () => {
      toast.success('Annonce deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete annonce ' + id + '?')) {
      deleteAnnonce({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Kilometrage</th>
            <th>Yearofcirculation</th>
            <th>Price</th>
            <th>Published</th>
            <th>Author id</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {annonces.map((annonce) => (
            <tr key={annonce.id}>
              <td>{truncate(annonce.id)}</td>
              <td>{truncate(annonce.title)}</td>
              <td>{truncate(annonce.description)}</td>
              <td>{truncate(annonce.kilometrage)}</td>
              <td>{truncate(annonce.yearofcirculation)}</td>
              <td>{truncate(annonce.price)}</td>
              <td>{checkboxInputTag(annonce.published)}</td>
              <td>{truncate(annonce.authorId)}</td>
              <td>{timeTag(annonce.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.annonce({ id: annonce.id })}
                    title={'Show annonce ' + annonce.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAnnonce({ id: annonce.id })}
                    title={'Edit annonce ' + annonce.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete annonce ' + annonce.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(annonce.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AnnoncesList
