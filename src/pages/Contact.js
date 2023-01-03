import * as React from 'react';
import { container } from '../theme';

import { Title, Text, Button, DynamicBackground, Input, Anchor } from '../components';

import { StaticImage } from "gatsby-plugin-image"

const About = ({ breakpoint }) => {
	return (
    <div style={container('full')}>
      {breakpoint === 'large' && (
        <div style={container('full')}>
          <Title>Contact Us</Title>
          <hr style={{width: '25%'}} />
          <div style={{...container('large'), flexDirection: 'row', justifyContent: 'space-evenly', gap: '1em', padding: '1em'}}>
            <StaticImage src='../images/coffee-front.jpg' alt='Outdoor entrance of a cafe' />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '1em'}}>
              <Text>
                123 Main Street, Phoenix, AZ 85012<br />
                Phone: (602) 555-1212<br />
                Email: <Anchor href='mailto:info@greco.coffee'>info@greco.coffee</Anchor><br />
                Website: <Anchor href='http://www.greco.coffee'>www.greco.coffee</Anchor>
              </Text>
              <Text>
                Business hours:<br />
                Monday - Friday: 7:00am - 6:00pm<br />
                Saturday: 8:00am - 4:00pm<br />
                Sunday: Closed
              </Text>
              <Text>
                Social media:<br />
                Facebook: <Anchor href='http://www.facebook.com/grecocoffee'>@grecocoffee</Anchor><br />
                Instagram: <Anchor href='http://www.instagram.com/grecocoffee'>@grecocoffee</Anchor><br />
                Twitter: <Anchor href='http://www.twitter.com/grecocoffee'>@grecocoffee</Anchor>
              </Text>
              <Text> Sign up for our newsletter:</Text>
              <form style={{display: 'flex', flexDirection: 'row'}}>
                <Input style={{basis: '60%', padding: '12px 12px'}} type='square' />
                <Button style={{basis: '40%', padding: '12px 12px'}} type='square'>Subscribe</Button>
              </form>
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
                123 Main Street, Phoenix, AZ 85012<br />
                Phone: (602) 555-1212<br />
                Email: <Anchor href='mailto:info@greco.coffee'>info@greco.coffee</Anchor><br />
                Website: <Anchor href='http://www.greco.coffee'>www.greco.coffee</Anchor>
              </Text>
              <Text>
                Business hours:<br />
                Monday - Friday: 7:00am - 6:00pm<br />
                Saturday: 8:00am - 4:00pm<br />
                Sunday: Closed
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
export const Head = () => <title>Greco Company Roasters</title>