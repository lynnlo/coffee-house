import * as React from "react"
import theme, { container } from "../theme"

import { Title, Subtitle, Button, DynamicBackground, Header } from "../components"

import './index.css'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main style={theme}>
      <div style={container('full')}>
        <Header>
          <StaticImage src='../images/title.png' alt='Greco Company logo' width={300}/>
          <div style={{...container('medium'), flexDirection: 'row', paddingTop: '1em'}}>
            <Button type='plain' tabIndex="-1" color={'#aaa'}>Home<hr /></Button>
            <Link to='/About' style={{textDecoration: 'none'}}>
              <Button type='plain' tabIndex="-1">About Us<hr /></Button>
            </Link>
            <Link to='/Contact' style={{textDecoration: 'none'}}>
              <Button type='plain' tabIndex="-1">Contact<hr /></Button>
            </Link>
          </div>
        </Header>
        <DynamicBackground full src='https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg' alt='Background of coffee beans'>
          <div style={{...container('medium'), alignItems: 'start'}}>
            <Title>Greco Company</Title>
            <Subtitle>Specialty Coffee Roasters</Subtitle>
          </div>
          <div style={{...container('medium')}}>
            <Link to='/About' style={{textDecoration: 'none'}}>
              <Button type='default'>Explore</Button>
            </Link>
          </div>
        </DynamicBackground>
      </div>
    </main>
  )
}

export default IndexPage
export const Head = () => <title>Greco Company Roasters</title>