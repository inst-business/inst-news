import React from 'react'
import PropTypes from 'prop-types'

import * as cx from './Form.module.sass'
import { useFormWrapper } from './Form'

const FormTextArea = ({
  label,
  name,
  id = `__${name}-field`,
  cols,
  rows = 5,
  placeholder,
  children,
}) => {
  
  useFormWrapper('Form.TextArea')
  
  return (
    <div className={cx.Field}>
      <label htmlFor={id}>
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        // {...(value && { value })}
        {...(children && { defaultValue: children })}
      ></textarea>
    </div>
  )
}

FormTextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  children: PropTypes.string,
}

export default FormTextArea