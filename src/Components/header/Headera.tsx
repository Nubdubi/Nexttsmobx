import React from 'react'
import {Nav,Headers} from "./style/HeaderStyle"
import Link,{LinkProps} from 'next/link'


interface AppLinkProps extends LinkProps {
    label:string
}
// label = 링크명 type string 설정


export const AppLink:React.FC<AppLinkProps> = ({href,label}) => {
    return (
        <Link href={href}>
            <a>{label}</a>
        </Link>
    )
}

// AppLink 변수를 : 리액트 React. FC<APPLinkProps> proops 값으로 지정 
// href 와 label 명을 받아줌 
// <링크 주소뒤에 href 값을 넣어줌>
// 라벨명 출력

export function Headera(){
return(
    <Nav style={{   fontSize:"40px", 
    display:"flex",
    justifyContent:'space-between',
    width:"100%",
    position:"fixed",
    backgroundColor:"#fffff50",}}>
        {/* nav 네비게이션 css 설정 */}
        <AppLink href="/about" label="About"/> 
        {/* AppLink 를 가져와서 이름을 보여줌 about page로 이동 */}
        <AppLink href="/" label="I-love-Soap"/>
        {/* AppLink 를 가져와서 이름을 보여줌 메인페이지로 이동 이동 */}
        <AppLink href="/social" label="social"/> 
        {/* AppLink 를 가져와서 이름을 보여줌 social 값으로  이동 */}

    </Nav>
)

}

export default Headera