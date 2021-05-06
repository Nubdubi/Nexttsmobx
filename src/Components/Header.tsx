import React from 'react'
import AppLink from './AppLink'


interface HeaderProps{

}

const Header:React.FC<HeaderProps> = () =>{
return(
<header style={{
 display:"flex",
 justifyContent:'space-between',
 width:"100%"}}>

    <nav style={{fontSize:"40px", display:"flex",
    justifyContent:'space-between',
    width:"100%"}}>
        <AppLink href="/" label="Next.js"/>
        <AppLink href="/about" label="About"/> 



    </nav>

</header>
)

}
export default Header
