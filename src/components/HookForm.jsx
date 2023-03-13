import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

export default () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const onSubmit = (values) => {
    // form is valid
    console.log(values)
  }

  return (
    <div className='container'>
      <div className='row mb-5'>
        <div className='col-lg-12 text-center'>
          <h1 className='mt-5'>Login form with React Hook Form</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group mb-2'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            placeholder='Enter email'
            className={`form-control ${errors?.email ? 'is-invalid' : ''}`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address format'
              }
            })}
          />
          <ErrorMessage
            className='invalid-feedback'
            name='email'
            as='div'
            errors={errors}
          />
        </div>

        <div className='form-group mb-2'>
          <label htmlFor='password'>Password</label>
          <input
            placeholder='Enter password'
            className={`form-control ${errors?.password ? 'is-invalid' : ''}`}
            {...register('password', {
              required: 'Password is required',
              validate: (value) =>
                value.length < 3 || 'Password must be 3 characters at minimum'
            })}
          />
          <ErrorMessage
            className='invalid-feedback'
            name='password'
            as='div'
            errors={errors}
          />
        </div>

        <button className='btn btn-primary btn-block' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}
