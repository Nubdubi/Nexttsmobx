import {useEffect, useState} from 'react';
import store from '../store/Rootstore'



// mobx 를 이용한 이미지 및 데이터 출력
function TopBar(){
    
    const onLoad= () => {
        store.load('https://fakestoreapi.com/products?limit=5')
        }


    return (
        <>
<button onClick={onLoad}> 버튼 </button>
        </>
    )
}


    export default TopBar
