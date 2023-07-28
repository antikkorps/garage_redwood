import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ImageForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.image?.id)
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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.image?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="featuredImage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Featured image
        </Label>

        <CheckboxField
          name="featuredImage"
          defaultChecked={props.image?.featuredImage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="featuredImage" className="rw-field-error" />

        <Label
          name="AnnonceId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Annonce id
        </Label>

        <NumberField
          name="AnnonceId"
          defaultValue={props.image?.AnnonceId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="AnnonceId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ImageForm
