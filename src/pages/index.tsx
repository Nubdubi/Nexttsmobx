import Layout from '../Components/Layout'
import styled,{css} from "styled-components"
import store from "../store/Rootstore";
import {Button,Main,Items1,Items2,Items3,Items4} from "../../styles/StyledButton"
// styledButton 에서 CSS 값 출력 테스트.. 스타일컴포넌트 어렵다...




function Home({children,...props}) {
  return (
    <Layout pageTitle="Home">
        <Main>
          <Items1>
          <img src="https://lush.co.kr/data/goods/16/04/19/196/196_detail_012.png" alt=""/>
          <Button>Detail</Button> 
          </Items1>

           <Items2>
          <img src="https://lush.co.kr/data/goods/16/04/19/196/196_detail_012.png" alt=""/>
          <Button>Detail</Button> 
          </Items2>

          <Items3>
          <img src="https://lush.co.kr/data/goods/16/04/19/196/196_detail_012.png" alt=""/>
          <Button>Detail</Button> 
          </Items3>

          <Items4>
          <img src="https://lush.co.kr/data/goods/16/04/19/196/196_detail_012.png" alt=""/>

          <Button>Detail</Button> 
          </Items4>
     
        </Main>


      


    </Layout>
  
  
    )
}



export default Home