import {useEffect, useState} from 'react';
import store from '../store/Rootstore'

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
