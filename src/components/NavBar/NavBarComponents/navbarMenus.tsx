import useWindowDimensions from '@/hooks/useWindowDimensions'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import type { NavBarMenu } from '../navbar'
import type { Dispatch, MutableRefObject, SetStateAction } from 'react'

import styles from './navbarMenu.module.css'

export default function NavBarMenus (props: {
  navBarMenus: NavBarMenu[]
  isNavExpanded: boolean
  setIsNavExpanded: Dispatch<SetStateAction<boolean>>
  hamburgerRef: MutableRefObject<HTMLImageElement | null>
}): JSX.Element {
  const { width } = useWindowDimensions()
  const {
    navBarMenus,
    isNavExpanded,
    setIsNavExpanded,
    hamburgerRef
  } = props
  const listStyle = clsx({
    [styles.listExpanded]: (width !== null && !isNaN(width) ? width < 568 : true) && isNavExpanded,
    [styles.list]: !isNavExpanded || (width !== null && !isNaN(width) ? width > 568 : false)
  })

  const dropdown = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    if (!isNavExpanded) return
    function handleClick (event: any): void {
      if ((dropdown.current != null) &&
                    (hamburgerRef.current != null) &&
                    !dropdown.current.contains(event.target) &&
                    !hamburgerRef.current.contains(event.target)) {
        setIsNavExpanded(false)
      }
    }
    window.addEventListener('click', handleClick)
    return () => { window.removeEventListener('click', handleClick) }
  }, [isNavExpanded])

  return (
        <ul ref={dropdown} className={listStyle}>
            {navBarMenus.map((menu) =>
                <li className={styles.item} key={menu.displayName}>
                    <Link href={menu.href}>{menu.displayName}</Link>
                </li>
            )}
        </ul>
  )
}
