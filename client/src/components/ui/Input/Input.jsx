import React from 'react'
import { useController } from 'react-hook-form'

import './index.css'

/**
 * Encapsulates registering react-hook-form input and displays errors
 * @param label
 * @param name
 * @param rules
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function Input({ label, name, rules, ...rest }) {
  /* TODO use useControlled hook which connects to form context and provides props to input */
  const { field, fieldState } = useController({ name, rules, defaultValue: '' })

  return (
    <label className="input">
      {label}
      <input type="text" {...rest} {...field} />
      {fieldState.error && <div>{fieldState.error.message}</div>}
    </label>
  )
}

export default Input
