import * as React from "react"
import theme, { container } from "../theme"

import { Button, Footer, Header, Text } from "../components"
import Transition from "../components/transition"

import './index.css'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ParallaxProvider } from "react-scroll-parallax"

const TemplateWrapper = ({ children, location }) => {
  let [breakpoint, setBreakpoint] = React.useState('medium')
  let [windowRatio, setWindowRatio] = React.useState(16 / 9)
  React.useEffect(() => {
    let handleResize = () => {
      if (window.innerWidth < 768 || window.innerHeight < 768) {
        setBreakpoint('small')
      } else if (window.innerWidth < 1024 || window.innerHeight < 1024) {
        setBreakpoint('medium')
      } else {
        setBreakpoint('large')
      }
      setWindowRatio(window.innerWidth / window.innerHeight)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

	return (
    <main style={theme}>
      <div style={{overflowX: 'hidden'}}>
      <ParallaxProvider>
        {breakpoint === 'large' && (
          <Header>
            <Link to='/' style={{textDecoration: 'none'}}>
              <StaticImage src='../images/coffee-title-transparent.png' alt='Greco Company logo and title' style={{width: '12vw'}}/>
            </Link>
            <div style={{...container('medium'), flexDirection: 'row', paddingTop: '1em', gap: '1em'}}>
              <Link to='/' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">Home<hr /></Button>
              </Link>
              <Link to='/Shop' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">Shop<hr /></Button>
              </Link>
              <Link to='/Contact' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">Contact<hr /></Button>
              </Link>
            </div>
          </Header>
        )}
        {breakpoint === 'medium' && (
          <Header>
            <Link to='/' style={{textDecoration: 'none'}}>
              <StaticImage src='../images/gatsby-icon-transparent.png' alt='Greco Company logo' style={{width: '8vw'}}/>
            </Link>
            <div style={{...container('medium'), flexDirection: 'row', paddingTop: '1em', gap: '1em'}}>
              <Link to='/' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">Home<hr /></Button>
              </Link>
              <Link to='/Shop' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">Shop<hr /></Button>
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
                <Button type='plain' tabIndex="-1">Home<hr /></Button>
              </Link>
              <Link to='/Shop' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">Shop<hr /></Button>
              </Link>
              <Link to='/Contact' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">Contact<hr /></Button>
              </Link>
            </div>
          </Header>
        )}
        
        <Transition location={location}>
          {React.Children.map(children, child => {
            return React.cloneElement(child, { breakpoint, windowRatio })
          })}
        </Transition>

        <Footer>
          <div style={{...container('medium'), flexDirection: 'row', paddingTop: '1em', gap: '1em'}}>
            <Link to='/' style={{textDecoration: 'none'}}>
              <Text> © 2023 Greco Company. All rights reserved.  </Text>
            </Link>
          </div>
        </Footer>
      </ParallaxProvider>
      </div>
    </main>
  )
}

export default TemplateWrapper

export function Head() {
  return (
    <>
      <html lang="en" />
      <title>Greco Company Roasters</title>
      <meta name="title" content="Greco Coffee Company" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content="Greco Co. is a family-owned coffee specialty roaster based in Phoenix, Arizona." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Greco Coffee Company" />
      <meta property="og:description" content="Greco Co. is a family-owned coffee specialty roaster based in Phoenix, Arizona." />
      <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="Greco Coffee Company" />
      <meta property="twitter:description" content="Greco Co. is a family-owned coffee specialty roaster based in Phoenix, Arizona." />
      <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
    </>
  )
}