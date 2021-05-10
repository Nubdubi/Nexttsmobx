import React from 'react'
import { Container, Link } from './HeaderStyle'

interface Headerinterface {
  children?: React.ReactNode
  restprops?: HTMLAnchorElement
  href: string
}
export default function Header({ children, ...restProps }: ChildrenType): JSX.Element {
  return <Container {...restProps}>{children}</Container>
}

Header.Link = function HeaderLink({ children, ...restProps }: Headerinterface) {
  return <Link {...restProps}>{children}</Link>
}
