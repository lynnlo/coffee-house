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
                Phone: (602) 555-1212<br />
                Email: <Anchor href='mailto:info@grecoroasting.com'>info@grecoroasting.com</Anchor><br />
              </Text>
              <Text>
                Social media:<br />
                Facebook: <Anchor href='http://www.facebook.com/grecocoffee'>@grecocoffee</Anchor><br />
                Instagram: <Anchor href='http://www.instagram.com/grecocoffee_az'>@grecocoffee_az</Anchor><br />
                Twitter: <Anchor href='http://www.twitter.com/grecocoffee_az'>@grecocoffee_az</Anchor><br />
              </Text>
              <div>
                <Text> Sign up for our newsletter:</Text>
                <form style={{display: 'flex', flexDirection: 'row'}}>
                  <Input style={{basis: '60%', padding: '12px 12px'}} type='square' />
                  <Button style={{basis: '40%', padding: '12px 12px'}} type='square'>Subscribe</Button>
                </form>
                <Text>
                  This is a mock website created for FBLA. 
                </Text>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {breakpoint === 'medium' && (
        <div style={container('full')}>
            <DynamicBackground full style={{flexDirection: 'column'}} image={<StaticImage src="../images/coffee-front.jpg" alt="Outdoor entrance of a cafe" />}>
            <Title>Contact Us</Title>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '0.5em'}}>
              <Text>
                4944 W Northern Ave, Glendale, AZ 85301<br />
                Phone: (602) 555-1212<br />
                Email: <Anchor href='mailto:info@grecoroasting.com'>info@grecoroasting.com</Anchor><br />
              </Text>
              <Text>
                Social media:<br />
                Facebook: <Anchor href='http://www.facebook.com/grecocoffee'>@grecocoffee</Anchor><br />
                Instagram: <Anchor href='http://www.instagram.com/grecocoffee_az'>@grecocoffee_az</Anchor><br />
                Twitter: <Anchor href='http://www.twitter.com/grecocoffee_az'>@grecocoffee_az</Anchor><br />
              </Text>
            </div>
            <form style={{display: 'flex', flexDirection: 'column'}}>
              <Text> Sign up for our newsletter!</Text>
              <Input style={{basis: '60%', padding: '12px 12px'}} type='square' />
              <Button style={{basis: '40%', padding: '12px 12px'}} type='square'>Subscribe</Button>
            </form>
            <Text>
              This is a mock website created for FBLA. 
            </Text>
          </DynamicBackground>
        </div>
      )}

      {breakpoint === 'small' && (
        <div style={container('full')}>
          <DynamicBackground full style={{flexDirection: 'column'}} image={<StaticImage src="../images/coffee-front.jpg" alt="Outdoor entrance of a cafe" />}>
            <Title>Contact Us</Title>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '0.5em'}}>
              <Text>
                4944 W Northern Ave, Glendale, AZ 85301<br />
                Phone: (602) 555-1212<br />
                Email: <Anchor href='mailto:info@grecoroasting.com'>info@grecoroasting.com</Anchor><br />
              </Text>
              <Text>
                Social media:<br />
                Facebook: <Anchor href='http://www.facebook.com/grecocoffee'>@grecocoffee</Anchor><br />
                Instagram: <Anchor href='http://www.instagram.com/grecocoffee_az'>@grecocoffee_az</Anchor><br />
                Twitter: <Anchor href='http://www.twitter.com/grecocoffee_az'>@grecocoffee_az</Anchor><br />
                This is a mock website created for FBLA. 
              </Text>
            </div>
            <form style={{display: 'flex', flexDirection: 'column'}}>
              <Text> Sign up for our newsletter!</Text>
              <Input style={{basis: '60%', padding: '12px 12px'}} type='square' />
              <Button style={{basis: '40%', padding: '12px 12px'}} type='square'>Subscribe</Button>
            </form>
            <Text>
              This is a mock website created for FBLA. 
            </Text>
          </DynamicBackground>
        </div>
      )}
    </div>
	)
}

export default About

export { Head } from '../layouts/index'