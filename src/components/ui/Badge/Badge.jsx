import React from 'react'
import clsx from 'clsx'

import * as cx from './Badge.module.sass'

const Badge = ({
  className,
  children,
}) => {
  return (
    <span className={clsx(cx.Badge, className)}>
      {children}
    </span>
  )
}

export default Badge