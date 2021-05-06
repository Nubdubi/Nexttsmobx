import React from 'react'
import AppLink from './AppLink'


interface HeaderProps{

}

const Header:React.FC<HeaderProps> = () =>{
return(
<header style={{
    // 헤더 스타일
 display:"flex",
 // 플렉스 
 justifyContent:'space-between',
 // 스페이스비트윈으로 간격 벌려줌
 width:"100%"
// 가로길이 100%  
}}>

    <nav style={{fontSize:"40px", display:"flex",
    justifyContent:'space-between',
    width:"100%"}}>

        {/* nav 네비게이션 css 설정 */}
        <AppLink href="/about" label="About"/> 
        {/* AppLink 를 가져와서 이름을 보여줌 about page로 이동 */}
        <AppLink href="/" label="I-love-Soap"/>
        {/* AppLink 를 가져와서 이름을 보여줌 메인페이지로 이동 이동 */}

        <AppLink href="/social" label="social"/> 
        {/* AppLink 를 가져와서 이름을 보여줌 social 값으로  이동 */}





    </nav>

</header>
)

}
export default Header
