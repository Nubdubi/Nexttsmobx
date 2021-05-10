import React from 'react'
import { Container, Row, Colum, Link, Title, Text, Break } from './footer'

type Footer = {
  children?: React.ReactNode
  restProps?: React.ReactNode
}

export default function Footer({ children, ...restProps }: Footer): JSX.Element {
  return <Container {...restProps}>{children}</Container>
}

Footer.Row = function FooterRow({ children }: Footer) {
  return <Row>{children}</Row>
}
Footer.Colum = function FooterColum({ children }: Footer) {
  return <Colum>{children}</Colum>
}

Footer.Link = function FooterLink({ ...restProps }: Footer) {
  return <Link {...restProps}></Link>
}
Footer.Title = function FooterTitle({ children, ...restProps }: Footer) {
  return <Title {...restProps}>{children}</Title>
}

Footer.Text = function FooterText({ children, ...restProps }: Footer) {
  return <Text {...restProps}>{children}</Text>
}

Footer.Break = function FooterBreak({ ...restProps }: Footer) {
  return <Break {...restProps} />
}
