import React, { useState } from 'react'

const FormState = () => {
  const [formState, setFormState] = useState({
    formValues: {
      email: '',
      password: ''
    },
    formErrors: {
      email: '',
      password: ''
    },
    formValidity: {
      email: false,
      password: false
    }
  })

  const handleChange = ({ target }) => {
    const { formValues } = formState
    formValues[target.name] = target.value
    setFormState({ formValues })
    handleValidation(target)
  }

  const handleValidation = (target) => {
    const { name, value } = target
    const fieldValidationErrors = formState.formErrors
    const validity = formState.formValidity
    const isEmail = name === 'email'
    const isPassword = name === 'password'
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    validity[name] = value.length > 0
    fieldValidationErrors[name] = validity[name]
      ? ''
      : `${name} is required and cannot be empty`

    if (validity[name]) {
      if (isEmail) {
        validity[name] = emailTest.test(value)
        fieldValidationErrors[name] = validity[name]
          ? ''
          : `${name} should be a valid email address`
      }
      if (isPassword) {
        validity[name] = value.length >= 3
        fieldValidationErrors[name] = validity[name]
          ? ''
          : `${name} should be 3 characters minimum`
      }
    }

    setFormState({
      ...formState,
      formErrors: fieldValidationErrors,
      formValidity: validity
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { formValues, formValidity } = formState
    if (Object.values(formValidity).every(Boolean)) {
      // Form is valid
      console.log(formValues)
    } else {
      for (let key in formValues) {
        let target = {
          name: key,
          value: formValues[key]
        }
        handleValidation(target)
      }
    }
  }

  return (
    <div className='container'>
      <div className='row mb-5'>
        <div className='col-lg-12 text-center'>
          <h1 className='mt-5'>React regular form</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Email address</label>
              <input
                type='email'
                name='email'
                className={`form-control ${
                  formState.formErrors.email ? 'is-invalid' : ''
                }`}
                placeholder='Enter email'
                onChange={handleChange}
                value={formState.formValues.email}
              />
              <p className='invalid-feedback'>{formState.formErrors.email}</p>
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                name='password'
                className={`form-control ${
                  formState.formErrors.password ? 'is-invalid' : ''
                }`}
                placeholder='Password'
                onChange={handleChange}
                value={formState.formValues.password}
              />
              <p className='invalid-feedback'>
                {formState.formErrors.password}
              </p>
            </div>
            <button
              type='submit'
              className='btn btn-primary btn-block'
              style={{ marginTop: 20 }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormState
