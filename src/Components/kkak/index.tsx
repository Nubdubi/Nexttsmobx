import React from 'react'
import { Container, Something } from './kkakStyle'

export default function Kkak({ children, ...restProps }: ChildrenType): JSX.Element {
  return <Container {...restProps}>{children}</Container>
}

Kkak.something = function Kkaksomething({ children, ...restProps }: ChildrenType) {
  return <Something {...restProps}>{children}</Something>
}
