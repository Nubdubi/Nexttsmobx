import React from 'react'
import { Container, SoapItem, Title, Price, Description, Category, Image, Button } from './SoapStyle'

export default function Soap({ children, ...restProps }: ChildrenType): JSX.Element {
  return <SoapItem {...restProps}> {children} </SoapItem>
}

Soap.Container = function SoapContainer({ children, ...restProps }: ChildrenType) {
  return <Container {...restProps}>{children}</Container>
}

Soap.Title = function SoapTitle({ children, ...restProps }: ChildrenType) {
  return <Title {...restProps}>{children}</Title>
}

Soap.Price = function SoapPrice({ children, ...restProps }: ChildrenType) {
  return <Price {...restProps}>{children}</Price>
}

Soap.Description = function SoapDescription({ children, ...restProps }: ChildrenType) {
  return <Description {...restProps}>{children}</Description>
}

Soap.Category = function SoapCategory({ children, ...restProps }: ChildrenType) {
  return <Category {...restProps}>{children}</Category>
}

Soap.Image = function SoapImage({ ...restProps }) {
  return <Image {...restProps} />
}

Soap.Button = function SoapButton({ ...restProps }) {
  return <Button {...restProps} />
}
