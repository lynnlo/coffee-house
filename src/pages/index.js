import * as React from "react"
import theme, { container } from "../theme"

import { Title, Subtitle, Button, DynamicBackground, Header } from "../components"

import './index.css'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
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
                <Button type='plain' tabIndex="-1" color='#aaa'>Home<hr /></Button>
              </Link>
              <Link to='/About' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">About<hr /></Button>
              </Link>
              <Link to='/Contact' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">Contact<hr /></Button>
              </Link>
            </div>
          </Header>
        )}
        {breakpoint === 'small' && (
          <Header style={{justifyContent: 'center'}}>
            <div style={{...container('medium'), flexDirection: 'row', paddingTop: '1em'}}>
              <Link to='/' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1" color='#aaa'>Home<hr /></Button>
              </Link>
              <Link to='/About' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">About<hr /></Button>
              </Link>
              <Link to='/Contact' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">Contact<hr /></Button>
              </Link>
            </div>
          </Header>
        )}

        {breakpoint === 'large' && (
          <DynamicBackground full intractable src='https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg' alt='Background of coffee beans'>
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
          <DynamicBackground full style={{flexDirection: 'column'}} src='https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg' alt='Background of coffee beans'>
            <Title>Greco Company</Title>
            <Subtitle>Specialty Coffee Roasters</Subtitle>
            <Link to='/About' style={{textDecoration: 'none'}}>
              <Button type='default' style={{paddingLeft: '24px', paddingRight: '24px'}}>Explore</Button>
            </Link>
          </DynamicBackground>
        )}
      </div>
    </main>
  )
}

export default IndexPage
export const Head = () => <title>Greco Company Roasters</title>