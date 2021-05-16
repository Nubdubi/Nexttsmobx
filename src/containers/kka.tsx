import React from 'react'
import dynamic from 'next/dynamic'
import { Design } from '../Components'

type NewType = JSX.Element

function kka(): NewType {
  const DynamicComponent = dynamic(() => import('../Components/dyanamicpage/SeaConcept'), { ssr: false })

  return (
    <Design>
      <DynamicComponent />
    </Design>
  )
}

export default kka
