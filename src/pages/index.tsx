import React from 'react'
import { MainStyled } from '../../styles/SoapStyle'
import { SoapContainer } from '../containers/Soap'
import FooterContainer from '../containers/Footer'

// styledButton 에서 CSS 값 출력 테스트.. 스타일컴포넌트 어렵다...

function Home(): JSX.Element {
  return (
    <>
      <MainStyled>
        <SoapContainer />
      </MainStyled>
      <FooterContainer />
    </>
  )
}

export default Home
