import * as React from "react"
import { container } from "../theme"

import { Title, Subtitle, DynamicBackground} from "../components"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({ breakpoint }) => {
  return (
    <div style={{...container('full'), display: 'block', overflowY: 'scroll'}}>
      {breakpoint === 'large' && (
        <>
        <div style={container('full')}>
          <DynamicBackground full intractable image={<StaticImage src="../images/coffee-backdrop.jpg" alt="Background of coffee beans" />}>
            <div style={{...container('large'), alignItems: 'start'}}>
              <Title>Greco Company</Title>
              <Subtitle>Specialty Coffee Roasters</Subtitle>
            </div>
            <div style={{...container('medium'), flexBasis: '30%'}} />
          </DynamicBackground>
        </div>
        </>
      )}
      {breakpoint !== 'large' && (
        <DynamicBackground full style={{flexDirection: 'column'}} image={<StaticImage src="../images/coffee-backdrop.jpg" alt="Background of coffee beans" />}>
          <Title>Greco Company</Title>
          <Subtitle>Specialty Coffee Roasters</Subtitle>
        </DynamicBackground>
      )}
    </div>
  )
}

export default IndexPage
export const Head = () => <title>Greco Company Roasters</title>