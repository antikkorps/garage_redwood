import { MetaTags } from '@redwoodjs/web'

import VehiculesCell from 'src/components/VehiculesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      Home
      <VehiculesCell />
    </>
  )
}

export default HomePage
