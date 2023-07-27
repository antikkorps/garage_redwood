import { MetaTags } from '@redwoodjs/web'

import AnnonceDetailsCell from 'src/components/AnnonceDetailsCell'

const AnnonceDetailsPage = ({ id }) => {
  return (
    <>
      <MetaTags title="AnnonceDetails" description="AnnonceDetails page" />

      <AnnonceDetailsCell id={id} />
    </>
  )
}

export default AnnonceDetailsPage
