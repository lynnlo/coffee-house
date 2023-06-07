import * as React from "react"
import { container } from "../theme"

import { Title, Subtitle, DynamicBackground, Text, Container } from "../components"

import { StaticImage } from "gatsby-plugin-image"
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"

const IndexPage = ({ breakpoint, windowRatio }) => {
  return (
    <div>
      {breakpoint === 'large' && (
        <div style={container('full')}>
          <DynamicBackground full intractable image={<StaticImage src="../images/coffee-backdrop.jpg" alt="Background of coffee beans" />}>
            <div style={{...container('large'), alignItems: 'start'}}>
              <Title>Greco Company</Title>
              <Subtitle>Specialty Coffee Roasters</Subtitle>
            </div>
            <div style={{...container('medium'), flexBasis: '30%'}} />
          </DynamicBackground>
        </div>
      )}
      {breakpoint !== 'large' && (
        <DynamicBackground full style={{flexDirection: 'column'}} image={<StaticImage src="../images/coffee-backdrop.jpg" alt="Background of coffee beans" />}>
          <Title>Greco Company</Title>
          <Subtitle>Specialty Coffee Roasters</Subtitle>
        </DynamicBackground>
      )}
      <>
        <ParallaxBanner style={{aspectRatio: windowRatio}}>
          <ParallaxBannerLayer speed={30}>
            <DynamicBackground full clear image={<StaticImage src="../images/coffee-fields.jpg" alt="A field of coffee plants" />} />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer>
            <div style={{...container('full'), background: 'rgba(0,0,0,0.5)'}} />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer>
            <DynamicBackground full clear image={<StaticImage src="../images/journey-start.png" alt="A circle with a line on the bottom" />} />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer translateY={[-10, 90]}>
            <div style={{...container('full'), flexDirection: 'row'}}>
              <StaticImage width={400} src="../images/coffee-beans.png" alt="Coffee beans" />
            </div>
          </ParallaxBannerLayer>

          <ParallaxBannerLayer translateY={[50, -30]}>
            <div style={{...container('full'), flexDirection: 'row'}}>
              <Container size='medium'>
                <Subtitle>From Bean</Subtitle>
              </Container>
              <Container size='small' />
              <Container size='small'>
                <Text>
                  We work with local farmers to get our beans ethically and sustainably. <br /><br />
                  Our beans are grown in ideal conditions and are hand picked to ensure the best quality.
                </Text>
              </Container>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>

        <ParallaxBanner style={{aspectRatio: windowRatio}}>
          <ParallaxBannerLayer speed={30}>
            <DynamicBackground full clear image={<StaticImage src="../images/coffee-grinder.jpg" alt="A coffee grinder" />} />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer>
            <div style={{...container('full'), background: 'rgba(0,0,0,0.5)'}} />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer>
            <DynamicBackground full clear image={<StaticImage src="../images/journey-middle.png" alt="A line with a circle in the center" />} />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer translateY={[-10, 90]}>
            <div style={container('full')}>
              <StaticImage width={400} src="../images/coffee-grounds.png" alt="Coffee grounds" />
            </div>
          </ParallaxBannerLayer>

          <ParallaxBannerLayer translateY={[50, -30]}>
            <div style={{...container('full'), flexDirection: 'row'}}>
              <Container size='medium'>
                <Subtitle>To Ground</Subtitle>
              </Container>
              <Container size='small' />
              <Container size='small'>
                <Text>
                  Our beans are roasted in small batches to ensure quality control. <br /><br />
                  Then, we grind the beans to the perfect consistency for your brewing method.
                </Text>
              </Container>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>

        <ParallaxBanner style={{aspectRatio: windowRatio}}>
          <ParallaxBannerLayer speed={-60}>
            <DynamicBackground full clear image={<StaticImage style={{transform: 'translate(0, -1000px)'}} src="../images/coffee-shop.jpg" alt="A coffee shop interior" />} />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer>
            <div style={{...container('full'), background: 'rgba(0,0,0,0.5)'}} />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer>
            <DynamicBackground full clear image={<StaticImage src="../images/journey-end.png" alt="A circle with a line on the top" />} />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer translateY={[-10, 90]}>
            <div style={container('full')}>
              <StaticImage width={600} src="../images/coffee-bag.png" alt="A coffee bag" />
            </div>
          </ParallaxBannerLayer>

          <ParallaxBannerLayer translateY={[50, -30]}>
            <div style={{...container('full'), flexDirection: 'row'}}>
              <Container size='medium'>
                <Subtitle>To You</Subtitle>
              </Container>
              <Container size='small' />
              <Container size='small'>
                <Text>
                  We take pride in our coffee and want to share it with you. <br /><br />
                  Order a bag online or visit one of our stores to experience our coffee for yourself.
                </Text>
              </Container>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </>
    </div>
  )
}

export default IndexPage
export const Head = () => <title>Greco Company Roasters</title>