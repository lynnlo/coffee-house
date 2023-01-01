import * as React from 'react';
import theme, { container } from '../theme';

import { Title, Text, Button, DynamicBackground, Header, Input, Anchor } from '../components';

import './index.css';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  let [breakpoint, setBreakpoint] = React.useState('medium')
  React.useEffect(() => {
    let handleResize = () => {
      if (window.innerWidth < 768) {
        setBreakpoint('small')
      } else if (window.innerWidth < 1024) {
        setBreakpoint('medium')
      } else {
        setBreakpoint('large')
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
	return (
		<main style={theme}>
			<div style={container('full')}>
        {breakpoint !== 'small' && (
          <Header>
            <StaticImage src='../images/title.png' alt='Greco Company logo' width={300}/>
            <div style={{...container('medium'), flexDirection: 'row', paddingTop: '1em', gap: '1em'}}>
              <Link to='/' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">Home<hr /></Button>
              </Link>
              <Link to='/About' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">About<hr /></Button>
              </Link>
              <Link to='/Contact' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1" color='#aaa'>Contact<hr /></Button>
              </Link>
            </div>
          </Header>
        )}
        {breakpoint === 'small' && (
          <Header style={{justifyContent: 'center'}}>
            <div style={{...container('medium'), flexDirection: 'row', paddingTop: '1em'}}>
              <Link to='/' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">Home<hr /></Button>
              </Link>
              <Link to='/About' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">About<hr /></Button>
              </Link>
              <Link to='/Contact' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1" color='#aaa'>Contact<hr /></Button>
              </Link>
            </div>
          </Header>
        )}

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
            <DynamicBackground full style={{flexDirection: 'column'}} src='https://images.pexels.com/photos/2307221/pexels-photo-2307221.jpeg' alt='Outdoor entrance of a cafe'>
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
            <DynamicBackground full style={{flexDirection: 'column'}} src='https://images.pexels.com/photos/2307221/pexels-photo-2307221.jpeg' alt='Outdoor entrance of a cafe'>
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
		</main>
	)
}

export default About
export const Head = () => <title>Greco Company Roasters</title>