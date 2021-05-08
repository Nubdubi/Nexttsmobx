import { Router } from 'next/router'
import React from 'react'
import {
  Container,
  Link,
  } from "../../Components/header/style/HeaderStyle"


export default function Header({children,...restProps}){
  return <Container {...restProps}>{children}</Container>
}

Header.Link =  function HeaderLink({...restProps}){
  return <Link {...restProps}></Link>;}


