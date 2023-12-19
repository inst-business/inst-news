import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Menu } from 'lucide-react'

import * as cx from './Navbar.module.sass'
import { navLinks } from '@/global/const'
import Brand from '@/components/shared/Brand'
import Button from '@/components/ui/Button'

const Navbar = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <nav className={cx.Navbar}>
      <div className={cx.Center}>
        <div className={cx.Header}>
          <Link to={'/'}>
            <Brand className={cx.Logo} />
          </Link>
          <Button
            className={cx.Toggle}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <Menu />
          </Button>
        </div>
        <div
          className={cx.Links}
          aria-expanded={isOpenMenu}
        >
          {Object.entries(navLinks).map(([page, url], i, links) => (
            <Link
              to={url}
              key={i}
              className={cx.Link}
              // aria-current={'page'}
              onClick={() => setIsOpenMenu(false)}
            >
              {
                i < links.length - 1
                  ? page
                  : (<Button>{page}</Button>)
              }
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar