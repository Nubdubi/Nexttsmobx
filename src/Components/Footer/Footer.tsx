import React from 'react'

interface FooterProps{}

const Footer:React.FC<FooterProps> =()=>{
    return(
        <footer style={{textAlign:"center"}}>
            <p>This is {new Date().getFullYear()} Now You shopping !!🤣</p>
        </footer>
    )
} 
///
///
export default Footer