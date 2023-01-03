import * as React from "react"
import theme, { container } from "../theme"

import { Button, Header } from "../components"
import Transition from "../components/transition"

import './index.css'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const TemplateWrapper = ({ children, location }) => {
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
        {breakpoint === 'large' && (
          <Header>
            <Link to='/' style={{textDecoration: 'none'}}>
              <StaticImage src='../images/title.png' alt='Greco Company logo and title' style={{width: '15vw'}}/>
            </Link>
            <div style={{...container('medium'), flexDirection: 'row', paddingTop: '1em', gap: '1em'}}>
              <Link to='/' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">Home<hr /></Button>
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
        {breakpoint === 'medium' && (
          <Header>
            <Link to='/' style={{textDecoration: 'none'}}>
              <StaticImage src='../images/gatsby-icon.png' alt='Greco Company logo' style={{width: '10vw'}}/>
            </Link>
            <div style={{...container('medium'), flexDirection: 'row', paddingTop: '1em', gap: '1em'}}>
              <Link to='/' style={{textDecoration: 'none'}}>
                <Button type='plain' tabIndex="-1">Home<hr /></Button>
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
                <Button type='plain' tabIndex="-1">Home<hr /></Button>
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
        <Transition location={location}>
          {React.Children.map(children, child => {
            return React.cloneElement(child, { breakpoint })
          })}
        </Transition>
      </div>
    </main>
  )
}

export default TemplateWrapper