import * as React from "react"
import { container } from "../theme"

import { Title, Subtitle, Button, DynamicBackground } from "../components"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({ breakpoint }) => {
  return (
    <div style={container('full')}>
      {breakpoint === 'large' && (
        <DynamicBackground full intractable image={<StaticImage src="../images/coffee-backdrop.jpg" alt="Background of coffee beans" />}>
          <div style={{...container('medium'), alignItems: 'start'}}>
            <Title>Greco Company</Title>
            <Subtitle>Specialty Coffee Roasters</Subtitle>
          </div>
          <div style={{...container('medium'), flexBasis: '30%'}}>
            <Link to='/About' style={{textDecoration: 'none'}}>
              <Button type='default' style={{paddingLeft: '48px', paddingRight: '48px'}}>Explore</Button>
            </Link>
          </div>
        </DynamicBackground>
      )}
      {breakpoint !== 'large' && (
        <DynamicBackground full style={{flexDirection: 'column'}} image={<StaticImage src="../images/coffee-backdrop.jpg" alt="Background of coffee beans" />}>
          <Title>Greco Company</Title>
          <Subtitle>Specialty Coffee Roasters</Subtitle>
          <Link to='/About' style={{textDecoration: 'none'}}>
            <Button type='default' style={{paddingLeft: '24px', paddingRight: '24px'}}>Explore</Button>
          </Link>
        </DynamicBackground>
      )}
    </div>
  )
}

export default IndexPage
export const Head = () => <title>Greco Company Roasters</title>