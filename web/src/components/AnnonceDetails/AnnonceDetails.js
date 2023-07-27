import { Link, routes } from '@redwoodjs/router'

const AnnonceDetails = ({ annonceDetails }) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.annonceDetails({ id: annonceDetails.id })}>
            {annonceDetails.title}
          </Link>
        </h2>
      </header>
      <div>{annonceDetails.description}</div>
      <div>Posted at: {annonceDetails.createdAt}</div>
    </article>
  )
}

export default AnnonceDetails
