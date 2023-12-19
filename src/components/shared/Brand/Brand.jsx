import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import * as cx from './Brand.module.sass'

const Brand = ({
  className,
}) => {
  return (
    <strong className={clsx(cx.Brand, className)}>
      <span>Inst</span>News
    </strong>
  )
}

Brand.propTypes = {
  className: PropTypes.string,
}

export default Brand