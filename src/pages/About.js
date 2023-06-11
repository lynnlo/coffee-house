import * as React from 'react'
import { container } from '../theme'

import { Title, Text, DynamicBackground } from '../components'

import { StaticImage } from "gatsby-plugin-image"

const About = ({ breakpoint }) => {
	return (
    <div style={container('full')}>
      {breakpoint === 'large' && (
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
            <StaticImage src='../images/coffee-cup.jpg' alt='A cup of cappuccino' />
          </div>
        </div>
      )}

      {breakpoint === 'medium' && (
        <div style={container('full')}>
          <DynamicBackground full style={{flexDirection: 'column'}} image={<StaticImage src="../images/coffee-cup.jpg" alt="A cup of cappuccino" />}>
            <Title>About Us</Title>
            <hr style={{width: '25%'}} />
            <div style={{...container('medium'), width: '65vw', gap: '1em'}}>
              <Text>
                Founded in 2010, Greco Co. is a family-owned coffee roaster based in Phoenix, Arizona.
                With a passion for specialty coffee and a commitment to sustainability,
                the team at Greco Co. sources the highest quality beans from small-scale farms around the world.
              </Text>
              <Text>
                In addition to roasting and selling delicious coffee,
                Greco Co. is dedicated to educating their customers about the intricacies of the coffee industry.
                The team at Greco Co. is dedicated to helping their customers learn more about the art of coffee and how to brew the perfect cup.
              </Text>
            </div>
          </DynamicBackground>
        </div>
      )}

      {breakpoint === 'small' && (
        <div style={container('full')}>
        <DynamicBackground full style={{flexDirection: 'column'}} image={<StaticImage src="../images/coffee-cup.jpg" alt="A cup of cappuccino" />}>
            <Title>About Us</Title>
            <div style={{...container('medium'), width: '75vw'}}>
              <Text>
                Founded in 2010, Greco Co. is a family-owned coffee roaster based in Phoenix, Arizona.
                With a passion for specialty coffee and a commitment to sustainability.
              </Text>
              <Text>
                In addition to roasting and selling delicious coffee,
                Greco Co. is dedicated to educating their customers about the intricacies of the coffee industry.
              </Text>
            </div>
          </DynamicBackground>
        </div>
      )}
    </div>
	)
}

export default About

export { Head } from '../layouts/index'