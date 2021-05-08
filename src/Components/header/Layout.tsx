import React from 'react'
import Head from 'next/head'
import Header from './Headera'



interface LayoutProps {
    pageTitle:string
}

const Layout: React.FC<LayoutProps> = ({pageTitle, children})=>{
    return(
        <>  
           <Head>
               <title >
                   {pageTitle}
               </title>
            </Head> 
            <div>
                <Header />
                <main>{children}</main>
                <Header />
            </div>
        </>
    )

}

export default Layout