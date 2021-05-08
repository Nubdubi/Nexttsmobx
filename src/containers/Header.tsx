import React from 'react'
import {Header} from '../Components'
import * as ROUTES from '../constants/routes';
import Link,{LinkProps} from 'next/link'
import Router from 'next/router';

// interface AppLinkProps extends LinkProps {
//     label:string,
// }
// export const AppLink:React.FC<AppLinkProps> = ({href,label})=>{
//   return(
//       <Link href={href}>
//             <a >{label}</a>
//         </Link>
//   )
// }
export default function HeaderContainer(){
return(
    <Header>
      <Header.Link href="/">LOGO</Header.Link>
      <Header.Link href="/about">about</Header.Link>
      <Header.Link href="/shop">shop</Header.Link>
      <Header.Link href="/kka">KKA</Header.Link>
      <Header.Link href="/ppap">PPAP</Header.Link>


        {/* <AppLink href="/about" label="About"/> 
        <AppLink href="/#" label="home"/>
        <AppLink href="/#" label="pages"/> */}
    </Header>
    


)

}
