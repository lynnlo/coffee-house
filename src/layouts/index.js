import * as React from "react"
import { Link } from "gatsby"

import { theme } from '../theme';

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

	return <main style={theme}>
    {breakpoint !== 'small' && (
      <Header>
        <StaticImage src='../images/title.png' alt='Greco Company logo' width={300}/>
        <div style={{...container('medium'), flexDirection: 'row', paddingTop: '1em', gap: '1em'}}>
          <Link to='/' style={{textDecoration: 'none'}}>
            <Button type='plain' tabIndex="-1">Home<hr /></Button>
          </Link>
          <Link to='/About' style={{textDecoration: 'none'}}>
            <Button type='plain' tabIndex="-1" color='#aaa'>About<hr /></Button>
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
            <Button type='plain' tabIndex="-1" color='#aaa'>About<hr /></Button>
          </Link>
          <Link to='/Contact' style={{textDecoration: 'none'}}>
            <Button type='plain' tabIndex="-1">Contact<hr /></Button>
          </Link>
        </div>
      </Header>
    )}

    <Transition location={location}>{children}</Transition>
	</main>
}

export default TemplateWrapper