import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const FormikForm = () => {
  const validateEmail = (value) => {
    let error
    if (!value) {
      error = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address format'
    }

    return error
  }

  const validatePassword = (value) => {
    let error = null
    if (!value) {
      error = 'Password is required'
    } else if (value.length < 3) {
      error = 'Password must be 3 characters at minimum'
    }

    return error
  }

  const onSubmit = (values) => {
    // form is valid
    console.log(values)
  }

  return (
    <div className='container'>
      <div className='row mb-5'>
        <div className='col-lg-12 text-center'>
          <h1 className='mt-5'>Login form with Formik</h1>
        </div>
      </div>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <Field
                name='email'
                placeholder='Enter email'
                className={`form-control ${
                  touched.email && errors.email ? 'is-invalid' : ''
                }`}
                validate={validateEmail}
              />
              <ErrorMessage
                component='div'
                name='email'
                className='invalid-feedback'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <Field
                name='password'
                type='password'
                placeholder='Enter password'
                className={`form-control ${
                  touched.password && errors.password ? 'is-invalid' : ''
                }`}
                validate={validatePassword}
              />
              <ErrorMessage
                component='div'
                name='password'
                className='invalid-feedback'
              />
            </div>

            <button className='btn btn-primary btn-block' type='submit'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikForm
