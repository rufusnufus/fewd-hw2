import React from 'react'
import Form from '../ui/Form/Form'
import Input from '../ui/Input/Input'

import './index.css'

function LoginForm({ onSubmit, title, buttonText, error }) {
  return (
    <div className="loginform">
      <h2>{title}</h2>
      <Form onSubmit={onSubmit} defaultValues={{ login: '', password: '' }}>
        <Input
          name="login"
          label="Login"
          rules={{ required: { message: 'Login is required', value: true } }}
          className="loginform_input"
        />
        <Input
          name="password"
          label="Password"
          type="password"
          rules={{ required: { message: 'Password is required', value: true } }}
          className="loginform_input"
        />
        {error && <p>{error}</p>}
        <button type="submit">{buttonText}</button>
      </Form>
    </div>
  )
}

export default LoginForm
