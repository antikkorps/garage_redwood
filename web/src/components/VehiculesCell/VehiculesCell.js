import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query VehiculesQuery {
    vehicules: annonces {
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

export const Success = ({ vehicules }) => {
  return (
    <>
      {vehicules.map((vehicule) => (
        <vehicule key={vehicule.id}>
          <header>
            <h2>
              <Link to={routes.annonceDetails({ id: vehicule.id })}>
                {vehicule.title}
              </Link>
            </h2>
          </header>
          <p>Description: {vehicule.description}</p>
          <p>Kilométrage : {vehicule.kilometrage}</p>
          <p>Année de mise en circulation : {vehicule.yearofcirculation}</p>
          <p>Prix : {vehicule.price} €</p>
          <div>Crée le : {vehicule.createdAt}</div>
          {vehicule.Image.length > 0 && (
            <>
              <p>Images:</p>
              {vehicule.Image.map((image) =>
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
            </>
          )}
        </vehicule>
      ))}
    </>
  )
}
