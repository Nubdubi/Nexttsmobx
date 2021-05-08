import React from 'react'
import Link,{LinkProps} from 'next/link'


interface AppLinkProps extends LinkProps {
    label:string
}
// label = 링크명 type string 설정


const AppLink:React.FC<AppLinkProps> = ({href,label}) => {
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





export default AppLink