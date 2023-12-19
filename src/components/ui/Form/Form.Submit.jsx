import React from 'react'
import PropTypes from 'prop-types'

// import * as cx from './Form.module.sass'
import { useFormWrapper } from './Form'
import Button from '@/components/ui/Button'

const FormSubmit = ({
  name,
  id = `__${name || 'form'}-submit`,
  children,
}) => {

  useFormWrapper('Form.Submit')
  
  return (
    <Button
      type={'submit'}
      // variant={'secondary'}
      isFull
      name={name}
      id={id}
    >
      {children}
    </Button>
  )
}

FormSubmit.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.any,
}

export default FormSubmit