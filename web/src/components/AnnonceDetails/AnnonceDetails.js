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
      <div>
        <p>{annonceDetails.description}</p>
        <p>Kilométrage : {annonceDetails.kilometrage}</p>
        <p>Année de mise en circulation : {annonceDetails.yearofcirculation}</p>
        <p>Prix : {annonceDetails.price} €</p>
      </div>
      <div>Posted at: {annonceDetails.createdAt}</div>
    </article>
  )
}

export default AnnonceDetails
