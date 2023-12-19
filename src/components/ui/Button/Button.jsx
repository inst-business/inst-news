import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import * as cx from './Button.module.sass'

const Button = ({
  type = 'button',
  variant,
  size,
  isFull,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsx(cx.Btn, className)}
      {...(variant && { 'data-variant': variant })}
      {...(size && { 'data-size': size })}
      {...(isFull && { 'data-full': true })}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'lg']),
  className: PropTypes.string,
  children: PropTypes.any,
}

// FormSubmit.defaultProps = {
//   type: 'button',
// }


export default Button