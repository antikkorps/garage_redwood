import { MetaTags } from '@redwoodjs/web'

import SearchBar from 'src/components/SearchBar/SearchBar'
import VehiculesCell from 'src/components/VehiculesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      Home
      <VehiculesCell />
      <SearchBar />
    </>
  )
}

export default HomePage
