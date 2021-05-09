import React from 'react'
import { Footer } from '../Components'

export default function Footercontainer(): JSX.Element {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Colum>
          <Footer.Link>
            <a href="/about"> Lils making</a>
          </Footer.Link>
          <Footer.Link>
            <a href="/about"> Lils making</a>
          </Footer.Link>
        </Footer.Colum>
      </Footer.Row>
      <Footer.Row>
        <Footer.Colum>
          <Footer.Link>
            <a href="/about"> Lils making</a>
          </Footer.Link>
        </Footer.Colum>
      </Footer.Row>
      <Footer.Row>
        <Footer.Colum>
          <Footer.Link>
            <a href="/about"> GGaGGung Making </a>
          </Footer.Link>
        </Footer.Colum>
      </Footer.Row>
    </Footer>
  )
}
