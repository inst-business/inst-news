import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import * as cx from './Form.module.sass'
import { createCompoundsContext } from '@/hooks/compounds'
import FormInput from './Form.Input'
import FormTextArea from './Form.TextArea'
import FormSubmit from './Form.Submit'

const {
  WrapperProvider: FormProvider,
  useValidateCompounds,
  useWrapperOfCompounds,
} = createCompoundsContext('Form')

const Form = ({
  action,
  method,
  className,
  children,
}) => {

  useValidateCompounds(Form, children)

  return (
    <form
      action={action}
      method={method}
      className={clsx(cx.Form, className)}
    >
      <FormProvider value={{}}>
        {children}
      </FormProvider>
    </form>
  )
}

Form.propTypes = {
  action: PropTypes.string,
  method: PropTypes.oneOf(['GET', 'POST']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Form.Input = FormInput
Form.TextArea = FormTextArea
Form.Submit = FormSubmit

export default Form
export {
  useWrapperOfCompounds as useFormWrapper
}