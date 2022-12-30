import * as React from 'react';
import theme, { container } from '../theme';

import { Title, Text, Button, Header } from '../components';

import './index.css';

import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const About = () => {
	return (
		<main style={theme}>
			<div style={container('full')}>
        <Header>
          <StaticImage src='../images/title.png' alt='Greco Company logo' width={300}/>
          <div style={{...container('medium'), flexDirection: 'row', paddingTop: '1em'}}>
            <Link to='/' style={{textDecoration: 'none'}}>
              <Button type='plain' tabIndex="-1">Home<hr /></Button>
            </Link>
            <Button type='plain' tabIndex="-1" color={'#aaa'}>About Us<hr /></Button>
            <Link to='/Contact' style={{textDecoration: 'none'}}>
              <Button type='plain' tabIndex="-1">Contact<hr /></Button>
            </Link>
          </div>
        </Header>
        <div style={container('full')}>
          <Title>About Us</Title>
          <hr style={{width: '25%'}} />
          <div style={{...container('medium'), flexDirection: 'row', paddingTop: '1em', gap: '1em'}}>
            <StaticImage src='../images/coffee-shop.jpg' alt='Interior of a cafe' />
            <Text>
              Founded in 2010, Greco Co. is a family-owned coffee roaster based in Phoenix, Arizona.
              With a passion for specialty coffee and a commitment to sustainability,
              the team at Greco Co. sources the highest quality beans from small-scale farms around the world.
            </Text> 
          </div>
          <div style={{...container('medium'), flexDirection: 'row', paddingTop: '1em', gap: '1em'}}>
            <Text style={{textAlign: 'right'}}>
              In addition to roasting and selling delicious coffee,
              Greco Co. is dedicated to educating their customers about the intricacies of the coffee industry.
              From hosting cupping events and tastings to offering barista training and wholesale support,
              the team at Greco Co. is dedicated to helping their customers learn more about the art of coffee and how to brew the perfect cup.
            </Text> 
            <StaticImage src='../images/coffee-cup.jpg' alt='A cup of espresso' />
          </div>
        </div>
      </div>
		</main>
	)
}

export default About
export const Head = () => <title>Greco Company Roasters</title>