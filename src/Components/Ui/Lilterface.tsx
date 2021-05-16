import styled, { keyframes } from 'styled-components'

const animateDown = keyframes`
  0% , 20%, 50%, 80%, 100%, {
    transform: traslateY(0);
  }
  40% {
    transform: translateY(5px);
  60%{
    transform: translateY(3px);
  }
  
`

export const Container = styled.div`
  background-size: cover;
  background: black;
  background-position: center;
  animation: animateDown infinite 1.5s;
  color: white;
`
export const Section = styled.div`
  width: 100%;
`
export const RowBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: black;
`
export const TextBox = styled.div`
  height: 200px;
  background-color: #aaaaa50;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const VideoBox = styled.div`
  width: auto;
`

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 10px;
`
export const Card = styled.div`
  width: 300px;
  height: 500px;
  gird-template-columns: 1fr 1fr 1fr;
  gird-template-row: 1fr 1fr 1fr;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 10px;
`

export const AppBar = styled.button`
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 10px;
`
export const Image = styled.img`
  width: 200px;
  height: 200px;
  display: flex;
`
export const Text = styled.p`
  font-size: 15px;
  text-align: center;
  color: white;
`
export const H1 = styled.h1`
  font-size: 40px;
  color: white;
`
export const DownButton = styled.h1`
  position: fixed;
  bottom: 20px;
  left: 48%;
  font-size: 20px;
  animation: ${animateDown} infinite 1.5s;
`
export const LeftMove = styled.div`
  animation: ;
`
export const RightMove = styled.div``
export const UpDown = styled.div``
export const DownUp = styled.div``
