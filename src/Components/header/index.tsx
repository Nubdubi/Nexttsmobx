import React from 'react'
import {Nav,Headers,Logo,AppLink} from "../../Components/header/style/HeaderStyle"
import Link,{LinkProps} from 'next/link'

interface AppLink extends LinkProps {
    label:string
}
export default function Header({...restProps}){
  return (<Headers {...restProps}></Headers>)
}

Header.Nav = function Nav({children, ...restProps}){
  return (<Nav {...restProps}>{children} </Nav>)
}
Header.AppLink = function AppLink({children,...restProps}){
  return (<AppLink {...restProps}>{children}</AppLink>)
}

Header.Logo = function Logo({children, ...restProps}){
  return (<Logo {...restProps}>{children} </Logo>)
}
