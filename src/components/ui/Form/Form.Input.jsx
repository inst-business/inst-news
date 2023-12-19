import React from 'react'
import PropTypes from 'prop-types'

import * as cx from './Form.module.sass'
import { useFormWrapper } from './Form'

const FormInput = ({
  label,
  name,
  type,
  id = `__${name}-field`,
  placeholder,
  value,
}) => {

  useFormWrapper('Form.Input')
  
  return (
    <div className={cx.Field}>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        // {...(value && { value })}
        {...(value && { defaultValue: value })}
      />
    </div>
  )
}

FormInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  placeholder: PropTypes.string,
  value: PropTypes.any,
}

FormInput.defaultProps = {
  type: 'text',
}

export default FormInput