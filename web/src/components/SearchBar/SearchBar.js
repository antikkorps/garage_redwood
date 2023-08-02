import { useEffect, useState } from 'react'

import { Form, Label, SelectField, Submit, useForm } from '@redwoodjs/forms'
import { useParams } from '@redwoodjs/router'

import VehiculesCell from '../VehiculesCell'

const SearchBar = () => {
  const { term } = useParams()
  const [searchInput, setSearchInput] = useState(term || '')
  const [showFilters, setShowFilters] = useState(true) // On affiche toujours les filtres
  const [kilometer, setKilometer] = useState('')
  const [year, setYear] = useState('')

  const onChange = (event) => {
    setSearchInput(event.target.value)
  }

  const onKilometerChange = (event) => {
    setKilometer(event.target.value)
  }

  const onYearChange = (event) => {
    setYear(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const searchParams = new URLSearchParams()
    searchParams.append('searchInput', searchInput)
    searchParams.append('kilometer', kilometer)
    searchParams.append('year', year)

    const vehicules = useEffect(() => {
      return VehiculesCell.getData(searchParams)
    }, [searchParams])

    return <div>{vehicules}</div>
  }

  return (
    <>
      <div className="searchBar">
        <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
          {/* Toujours afficher les champs de recherche */}
          <Label name="searchBar" errorClassName="error">
            Votre recherche
          </Label>
          <input
            name="searchBar"
            value={searchInput}
            onChange={onChange}
            className="input"
          />

          {showFilters && (
            <>
              <Label name="kilometer" errorClassName="error">
                Kilométrage
              </Label>
              <SelectField
                name="kilometer"
                value={kilometer}
                onChange={onKilometerChange}
                errorClassName="error"
              >
                <option value="">Sélectionner un kilométrage</option>
                <option value="0-5000">0 - 5000 km</option>
                <option value="5000-10000">5000 - 10000 km</option>
                <option value="10000-20000">10000 - 20000 km</option>
                {/* Ajouter d'autres options de kilométrage selon vos besoins */}
              </SelectField>

              <Label name="year" errorClassName="error">
                Année de mise en circulation
              </Label>
              <SelectField
                name="year"
                value={year}
                onChange={onYearChange}
                errorClassName="error"
              >
                <option value="">Sélectionner une année</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                {/* Ajouter d'autres options d'années selon vos besoins */}
              </SelectField>
            </>
          )}

          <div>
            <Submit>Rechercher</Submit>
          </div>
        </Form>

        {/* <div className="searchResults">{vehicules}</div> */}
      </div>
    </>
  )
}

export default SearchBar
