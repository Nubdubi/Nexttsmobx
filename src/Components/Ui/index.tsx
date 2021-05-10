import React from 'react'
import { Container, RowBox, Card, AppBar, Button, Image, P, H1 } from './Lilterface'

export default function Design({ children, ...restProps }: ChildrenType): JSX.Element {
  return <Container {...restProps}>{children}</Container>
}

Design.RowBox = function DesignRowBox({ children, ...restProps }: ChildrenType): JSX.Element {
  return <RowBox {...restProps}> {children} </RowBox>
}

Design.Button = function DesignButton({ children, ...restProps }: ChildrenType): JSX.Element {
  return <Button {...restProps}>{children}</Button>
}

Design.Card = function DesignCard({ children, ...restProps }: ChildrenType): JSX.Element {
  return <Card {...restProps}>{children}</Card>
}

Design.AppBar = function DesignAppBar({ children, ...restProps }: ChildrenType): JSX.Element {
  return <AppBar {...restProps}>{children}</AppBar>
}

Design.Image = function DesignAppImage({ ...restProps }) {
  return <Image {...restProps} />
}

Design.p = function DesignAppImg({ children, ...restProps }: ChildrenType) {
  return <P {...restProps}>{children}</P>
}

Design.h1 = function DesignAppImg({ children, ...restProps }: ChildrenType): JSX.Element {
  return <H1 {...restProps}>{children}</H1>
}
