import NavBar from '../NavBar/navbar'
import React from 'react'
import type { PropsWithChildren } from 'react'

export default function Layout ({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
      <div>
        <NavBar />
        {children}
      </div>
  )
}
