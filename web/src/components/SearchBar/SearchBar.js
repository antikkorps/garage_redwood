import { useState } from 'react'

import { Form, Label, SelectField, Submit, useForm } from '@redwoodjs/forms'
import { useParams } from '@redwoodjs/router'

import VehiculesCell from '../VehiculesCell'

const SearchBar = () => {
  const { term } = useParams()
  const [searchInput, setSearchInput] = useState(term || '')
  const [showFilters] = useState(true)
  const [kilometer, setKilometer] = useState('')
  const [year, setYear] = useState('')
  const [vehicules, setVehicules] = useState(null) // Déclaration de la variable vehicules

  const onChange = (event) => {
    setSearchInput(event.target.value)
  }

  const onKilometerChange = (event) => {
    setKilometer(event.target.value)
  }

  const onYearChange = (event) => {
    setYear(event.target.value)
  }
  const formMethods = useForm()

  const onSubmit = async (event) => {
    event.preventDefault()
    const searchParams = new URLSearchParams()
    searchParams.append('searchInput', searchInput)
    searchParams.append('kilometer', kilometer)
    searchParams.append('year', year)

    // Appeler la fonction VehiculesCell.getData() pour récupérer les résultats de recherche
    const result = await VehiculesCell.getData(searchParams)

    console.log(result)

    // Mettre à jour le composant avec les résultats de recherche
    setVehicules(result)
  }

  return (
    <>
      <div className="searchBar">
        <Form
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          formMethods={formMethods}
        >
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
                <option value="20000 et au delà">20000 km et au delà</option>
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
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
              </SelectField>
            </>
          )}

          <div>
            <Submit>Rechercher</Submit>
          </div>
        </Form>

        {/* Afficher les résultats de recherche ici */}
        {vehicules && <div className="searchResults">{vehicules}</div>}
      </div>
    </>
  )
}

export default SearchBar
