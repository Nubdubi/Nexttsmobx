import Layout from '../Components/header/Layout'
import {MainStyled} from "../../styles/SoapStyle"
import { SoapContainer } from '../containers/Soap'


// styledButton 에서 CSS 값 출력 테스트.. 스타일컴포넌트 어렵다...




function Home() {
 

  return (
    <Layout pageTitle="Home">
     <MainStyled >
       <SoapContainer/>
     </MainStyled>
    </Layout>
  
  
    )
}



export default Home