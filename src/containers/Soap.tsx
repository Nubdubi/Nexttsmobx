import db from '../db/database.json'
import {MainStyled} from "../../styles/SoapStyle"
import {Soap} from '../Components'
// styledButton 에서 CSS 값 출력 테스트.. 스타일컴포넌트 어렵다...




export function SoapContainer() {
  return (
     <MainStyled >
       <Soap.Container>
      {db.map((item)=>(
        <Soap  key={item.id}>
         <Soap.Image src={item.image}/>
         <div className="wrap">
         <Soap.Title><h1>{item.title}</h1></Soap.Title> 
         <Soap.Price> <h2>{item.price}</h2></Soap.Price>
         <Soap.Category><span>{item.category}</span></Soap.Category> 
         <Soap.Description><span>{item.description}</span></Soap.Description> 
         {/* <Soap.Button >버튼</Soap.Button> */}
         </div>
        </Soap>
      ))}
       </Soap.Container>   

    </MainStyled>
  
  
    )
}


