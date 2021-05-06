import {useEffect, useState} from 'react';
import store from '../store/Rootstore'
import Layout from '../Components/Layout'
import Topbar from '../Components/TopBar'
import Rows from './Rows'

// 소셜에 출력되는 데이터 출력

function SocialItem(){
    const onLoad= () => {
        store.load('https://fakestoreapi.com/products?limit=10')
        }
    return (
        <>
<Layout pageTitle="">
    <Topbar/>
    <Rows/>
</Layout>
        </>
    )
}
    export default SocialItem
