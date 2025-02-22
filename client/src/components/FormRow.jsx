const FormRow = ({ type, name, labelText, placeHolder}) => {
  return (
    <div className="form-row">
          <label htmlFor={name} className='form-label'>
            {labelText || name}
          </label>
          <input type={type} id={name} name={name}
            className='form-input' placeholder={placeHolder || ''} required />
        </div>
  )
}

export default FormRow