import * as React from "react"
import { container } from "../theme"

import { Title, Subtitle, DynamicBackground, Text } from "../components"

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
        <DynamicBackground full clear image={<StaticImage src="../images/journey-start.jpg" alt="A dot with a line going down" />} />
        <DynamicBackground full clear image={<StaticImage src="../images/journey-middle.jpg" alt="A dot with a line going through it vertically" />} />
        <DynamicBackground full clear image={<StaticImage src="../images/journey-end.jpg" alt="A dot with a line going up" />} />
        <div>
          <div style={{...container('medium'), flexBasis: '50%'}}>
            <Subtitle style={{textAlign: 'start'}}> Beans </Subtitle>
            <Text>
              We source our coffee beans ethically and work with local farmers <br/>
              to ensure that we are getting the best quality beans.
            </Text>
          </div>
          <div style={{...container('medium'), flexBasis: '50%'}}>
            <StaticImage width={500} src="../images/coffee-beans.jpg" alt="A picture of coffee beans"></StaticImage>
          </div>
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