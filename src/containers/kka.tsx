import React from 'react'
import db from '../constants/database.json'

import { Design } from '../Components'
function kka(): JSX.Element {
  return (
    <Design>
      <div
        className="bar"
        style={{
          width: '100%',
          height: '200px',
        }}
      >
        행복으로 가득 채우세요
      </div>
      <div
        className="slidebar"
        style={{
          width: '100%',
          height: '300px',
          border: '1px solid black',
        }}
      >
        이곳엔 슬라이더~
      </div>
      <Design.RowBox>
        {db.map((item) => (
          <Design.Card key={item.id}>
            <Design.Image src={item.image} />
            <Design.h1>{item.title}</Design.h1>
            <Design.p>{item.price}</Design.p>
            <Design.p>
              <span>{item.category}</span>
            </Design.p>
            <Design.p>
              <span>{item.description}</span>
            </Design.p>
            {/* <Soap.Button >버튼</Soap.Button> */}
          </Design.Card>
        ))}
      </Design.RowBox>
      <div
        className="slidebar"
        style={{
          width: '100%',
          height: '300px',
          border: '1px solid black',
        }}
      >
        이곳엔 슬라이더~
      </div>
      <div
        className="slidebar"
        style={{
          width: '100%',
          height: '300px',
          border: '1px solid black',
        }}
      >
        이곳엔 슬라이더~
      </div>
    </Design>
  )
}

export default kka
