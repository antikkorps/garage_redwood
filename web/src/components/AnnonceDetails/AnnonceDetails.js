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
      {annonceDetails.Image.length > 0 && (
        <div>
          {annonceDetails.Image.map((image) =>
            image.featuredImage ? (
              <div key={image.id}>
                <img
                  src={image.url}
                  alt={image.name}
                  width="200px"
                  height="auto"
                />
                <p>{image.name}</p>
              </div>
            ) : null
          )}
        </div>
      )}
    </article>
  )
}

export default AnnonceDetails
