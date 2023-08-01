import { useState } from 'react'

import { Form, Label, TextField, Submit, useForm } from '@redwoodjs/forms'
import { useParams } from '@redwoodjs/router'

const SearchBar = () => {
  const { term } = useParams()
  const [searchInput, setSearchInput] = useState(term || '')

  const onChange = (event) => {
    setSearchInput(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    location.href = `/search/${searchInput}`
  }
  return (
    <>
      <div className="searchBar">
        <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
          <Label name="searchBar" errorClassName="error">
            Votre recherche
          </Label>
          <TextField name="searchBar" errorClassName="error" />
          <Submit>Envoyer</Submit>
        </Form>

        <div className="searchResults">
          <div className="searchResults__item">le résultat est ici</div>
        </div>
      </div>
    </>
  )
}

export default SearchBar
