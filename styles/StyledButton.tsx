import React from "react"
import styled,{css} from "styled-components"

const StyledButton = styled.button`
  width:100px;
  height:50px;
  padding: 13px
  border-radius: 4px
  font-size: 25px
  line-height: 10px;
  border: 1px solid lightgray;
  color: gray;
  backgroud: white;
`


const MainStyled = styled.div`
width:100%;
height:800px;
display: flex;
flex-direction: row;
   color: ${props => props.theme.color || "red"};
  background: ${props => props.color || "white"};


`

const Item1 = 
styled.div`
  width:23.999%;
  height:100%;
background: ${props => props.color || "red"};

`
const Item2 = 
styled.div`
  width:23.999%;
  height:100%;
background: ${props => props.color || "white"};

`
const Item3 = 
styled.div`
  width:23.999%;
  height:100%;
background: ${props => props.color || "blue"};

`
const Item4 = 
styled.div`
  width:23.999%;
  height:100%;
background: ${props => props.color || "green"};

`



export function Button({ children }) {
  return <StyledButton>{children}</StyledButton>
}



export function Main({children}){
    return <MainStyled>{children}</MainStyled>
}

export function Items1({children}){
    return( <Item1 >{children}</Item1>)
}

export function Items2({children}){
    return( <Item2 >{children}</Item2>)
}

export function Items3({children}){
    return( <Item3 >{children}</Item3>)
}

export function Items4({children}){
    return( <Item4 >{children}</Item4>)
}