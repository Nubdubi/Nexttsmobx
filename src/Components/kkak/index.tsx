import React from 'react'
import {
  Container,
  Something,

} from "./style/kkakStyle"

export default function Kkak({children,...restProps}) {
  return ( <Container {...restProps}>{children}</Container>)
}


Kkak.something =  function Kkaksomething({children, ...restProps}){
  return <Something {...restProps}>{children}</Something>;
}