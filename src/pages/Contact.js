import * as React from 'react'
import { container } from '../theme'

import { Title, Text, Button, DynamicBackground, Input, Anchor, Subtitle } from '../components'

import { StaticImage } from "gatsby-plugin-image"
import { Map, Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const About = ({ breakpoint }) => {
  const map_options = {
    longitude: -112.16619,
    latitude: 33.55335,
    zoom: 17
  }

	return (
    <div style={container('full')}>
      {breakpoint === 'large' && (
        <div style={container('full')}>
          <div style={{...container('large'), flexDirection: 'row', justifyContent: 'space-evenly', gap: '1em', padding: '1em'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Subtitle>Contact Us</Subtitle>
              <hr style={{width: '50%'}} />
              <div style={container('small')}>
                <Map initialViewState={map_options} mapStyle='mapbox://styles/mapbox/dark-v11' mapboxAccessToken={process.env.MAP_BOX_TOKEN}>
                <Marker longitude={-112.16619} latitude={33.55335} anchor="bottom" />
                </Map>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '1em'}}>
              <Text>
                4944 W Northern Ave, Glendale, AZ 85301<br />
                Phone: (555) 780-9292 <br />
                Email: <Anchor href='mailto:info@greco.coffee'>info@greco.coffee</Anchor><br />
              </Text>
              <Text>
                Social media:<br />
                Facebook: <Anchor href='http://www.facebook.com/grecocoffee'>@grecocoffee</Anchor><br />
                Instagram: <Anchor href='http://www.instagram.com/grecocoffee'>@grecocoffee</Anchor><br />
                Twitter: <Anchor href='http://www.twitter.com/grecocoffee'>@grecocoffee</Anchor>
              </Text>
              <div>
                <Text> Sign up for our newsletter:</Text>
                <form style={{display: 'flex', flexDirection: 'row'}}>
                  <Input style={{basis: '60%', padding: '12px 12px'}} type='square' />
                  <Button style={{basis: '40%', padding: '12px 12px'}} type='square'>Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {breakpoint === 'medium' && (
        <div style={container('full')}>
            <DynamicBackground full style={{flexDirection: 'column'}} image={<StaticImage src="../images/coffee-front.jpg" alt="Outdoor entrance of a cafe" />}>
            <Title>Contact Us</Title>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '1em'}}>
              <Text>
                4944 W Northern Ave, Glendale, AZ 85301<br />
                Phone: (602) 555-1212<br />
                Email: <Anchor href='mailto:info@greco.coffee'>info@greco.coffee</Anchor><br />
              </Text>
              <Text>
                Social media:<br />
                Facebook: <Anchor href='http://www.facebook.com/grecocoffee'>@grecocoffee</Anchor><br />
                Instagram: <Anchor href='http://www.instagram.com/grecocoffee'>@grecocoffee</Anchor><br />
                Twitter: <Anchor href='http://www.twitter.com/grecocoffee'>@grecocoffee</Anchor>
              </Text>
            </div>
            <form style={{display: 'flex', flexDirection: 'column'}}>
              <Text> Sign up for our newsletter!</Text>
              <Input style={{basis: '60%', padding: '12px 12px'}} type='square' />
              <Button style={{basis: '40%', padding: '12px 12px'}} type='square'>Subscribe</Button>
            </form>
          </DynamicBackground>
        </div>
      )}

      {breakpoint === 'small' && (
        <div style={container('full')}>
          <DynamicBackground full style={{flexDirection: 'column'}} image={<StaticImage src="../images/coffee-front.jpg" alt="Outdoor entrance of a cafe" />}>
            <Title>Contact Us</Title>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '1em'}}>
              <Text>
                123 Main Street, Phoenix, AZ 85012<br />
                Phone: (602) 555-1212<br />
                Email: <Anchor href='mailto:info@greco.coffee'>info@greco.coffee</Anchor><br />
                Website: <Anchor href='http://www.greco.coffee'>www.greco.coffee</Anchor>
              </Text>
              <Text>
                Social media:<br />
                Facebook: <Anchor href='http://www.facebook.com/grecocoffee'>@grecocoffee</Anchor><br />
                Instagram: <Anchor href='http://www.instagram.com/grecocoffee'>@grecocoffee</Anchor><br />
                Twitter: <Anchor href='http://www.twitter.com/grecocoffee'>@grecocoffee</Anchor>
              </Text>
            </div>
            <form style={{display: 'flex', flexDirection: 'column'}}>
              <Text> Sign up for our newsletter!</Text>
              <Input style={{basis: '60%', padding: '12px 12px'}} type='square' />
              <Button style={{basis: '40%', padding: '12px 12px'}} type='square'>Subscribe</Button>
            </form>
          </DynamicBackground>
        </div>
      )}
    </div>
	)
}

export default About

export { Head } from '../layouts/index'