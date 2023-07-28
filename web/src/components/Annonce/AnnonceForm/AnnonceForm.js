import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const AnnonceForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.annonce?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.annonce?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.annonce?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="kilometrage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Kilometrage
        </Label>

        <NumberField
          name="kilometrage"
          defaultValue={props.annonce?.kilometrage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="kilometrage" className="rw-field-error" />

        <Label
          name="yearofcirculation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Yearofcirculation
        </Label>

        <NumberField
          name="yearofcirculation"
          defaultValue={props.annonce?.yearofcirculation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="yearofcirculation" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <NumberField
          name="price"
          defaultValue={props.annonce?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="published"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Published
        </Label>

        <CheckboxField
          name="published"
          defaultChecked={props.annonce?.published}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="published" className="rw-field-error" />

        <Label
          name="authorId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author id
        </Label>

        <NumberField
          name="authorId"
          defaultValue={props.annonce?.authorId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="authorId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AnnonceForm
