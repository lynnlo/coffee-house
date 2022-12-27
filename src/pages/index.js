import * as React from "react"
import theme, { container } from "../theme"

import { Title, Subtitle, Button, DynamicBackground, Header } from "../components"

import './index.css'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main style={theme}>
      <div style={container('full')}>
        <Header>
          <StaticImage src='../images/Title.png' alt='Greco Company Logo' width={300}/>
          <div style={{...container('medium')}}>
            <Button type='plain'>About Us</Button>
          </div>
        </Header>
        <DynamicBackground full src='https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg'>
          <div style={{...container('medium'), alignItems: 'start'}}>
            <Title>Greco Company</Title>
            <Subtitle>New Age Coffee Roasters</Subtitle>
          </div>
          <div style={{...container('medium')}}>
            <Button type='default'>Shop Now</Button>
          </div>
        </DynamicBackground>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Greco Company Roasters</title>