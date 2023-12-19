import React from 'react'

import * as cx from './Section.module.sass'

const Section = ({
  children,
}) => {
  return (
    <main className={cx.Section}>
      {children}
    </main>
  )
}

export default Section