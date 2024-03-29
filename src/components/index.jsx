import * as React from "react"
import { container, text, button, anchor, input } from "../theme"
import { StaticImage } from "gatsby-plugin-image"
import Tilt from 'react-parallax-tilt'

export const Title = (props) => {
  return (
  <h1 style={{...text('large'), ...props.style}}>
    {props.children}
  </h1>
  )
}

export const Subtitle = (props) => {
  return (
  <h2 style={{...text('medium'), ...props.style}}>
    {props.children}
  </h2>
  )
}

export const Text = (props) => {
  return (
  <p style={{...text('small'), ...props.style}}>
    {props.children}
  </p>
  )
}

export const Container = (props) => {
  return (
  <div style={{...container(props.full ? "full" : props.size), ...props.style}}>
    {props.children}
  </div>
  )
}

export const Button = (props) => {
  const [hover, setHover] = React.useState(false)

  return (
  <button
    style={{...text('small'), ...button(props.type || 'default', hover, props.color || 'primary'), ...props.style}}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onFocus={() => setHover(true)}
    onBlur={() => setHover(false)}
    onClick={props.onClick}
    tabIndex={props.tabIndex}
  >
    {props.children}
  </button>
  )
}

export const Input = (props) => {
  const [hover, setHover] = React.useState(false)

  return (
  <input
    type={props.inputType || 'text'}
    style={{...text('small'), ...input(props.type || 'default', hover, props.color || 'primary'), ...props.style}}
    placeholder={props.placeholder || ''}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onFocus={() => setHover(true)}
    onBlur={() => setHover(false)}
    onChange={props.onChange}
  />
  )
}

export const Anchor = (props) => {
  const [hover, setHover] = React.useState(false)

  return (
  <a 
    href={props.href || '#'}
    style={{...anchor(props.type || 'default', hover, props.color), ...props.style}}
    target={props.target || '_self'}
    rel={props.rel || 'noopener noreferrer'}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onFocus={() => setHover(true)}
    onBlur={() => setHover(false)}
  >
    {props.children}
  </a>
  )
}

export const Header = (props) => {
  const header_style = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100vw',
    height: '100px',
    position: 'absolute',
    top: 0,
    zIndex: 2,
  }
  return (
  <header style={{...container(), ...header_style, ...props.style}}>
    {props.children}
  </header>
  )
}

export const Footer = (props) => {
  const footer_style = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100vw',
    height: '100px',
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  }
  return (
  <footer style={{...container(), ...footer_style, ...props.style}}>
    {props.children}
  </footer>
  )
}

export const ShopItem = (props) => {
  const [hover, setHover] = React.useState(false)

  const item_style = {
    background: '#222',
    width: props.large ? '500px' : '300px',
    height: props.large ? '500px' : '300px',
    flexShrink: 0,
  }

  const text_style = {
    background: '#111A',
    opacity: hover ? 1 : 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    transition: 'opacity 0.5s ease',
  }

  return (
  <Tilt
    tiltReverse
    tiltEnable={props.intractable === true}
  >
    <div
      style={{...container(), ...item_style, ...props.style}}
      role="button"
      tabIndex={0}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      {props.premium ?
        <StaticImage
          style={{width: '100%', height: '100%'}}
          src='../images/coffee-bag-dark.png'
          alt='A coffee bag'
        />
      :
        <StaticImage
          style={{width: '100%', height: '100%'}}
          src='../images/coffee-bag-normal.png'
          alt='A coffee bag'
        />
      }
      <div style={{...container(), ...text_style}}>
        <Subtitle> {props.name} </Subtitle>
        <Text style={{width: '75%'}}> {props.description} </Text>
        <Text> ${props.price} </Text>
      </div>
    </div>
  </Tilt>
  )
}

export const DynamicBackground = (props) => {
  let [position, setPosition] = React.useState({x: 0, y: 0})
  let [target, setTarget] = React.useState({x: 0, y: 0})

  let [imageStyle, setImageStyle] = React.useState({
    zIndex: -1,
    position: 'absolute',
    width: '100%',
    height: '100vh',
  })

  let [backgroundStyle, setBackgroundStyle] = React.useState({
    zIndex: 1,
    display: 'flex',
    background: props.clear ? '' : `linear-gradient(${props.intractable ? '90deg' : '0deg'}, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))`,
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: props.full ? '100vh' : 'fit-content',
    border: 'none',
    overflow: 'hidden',
  })
  
  let handleMouse = (e) => {
    setTarget({x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight})
  }

  React.useEffect(() => {
    if (!props.intractable) return
    let timer = setInterval(() => {
      setPosition({x: position.x + (target.x - position.x) / 8, y: position.y + (target.y - position.y) / 8})
      setImageStyle({...imageStyle, transform: `translate(${(position.x * 1) - .5}%, ${(position.y * 1) - .5}%)`})
      setBackgroundStyle({...backgroundStyle, transform: `translate(${(position.x * 0.8) - .5}%, ${(position.y * 0.8) - .5}%)`})
    }
    , 5)
    return () => clearInterval(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  React.useEffect(() => {
    if (props.intractable) {
      window.addEventListener('mousemove', handleMouse)
      return () => window.removeEventListener('mousemove', handleMouse)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
  <>
    {React.cloneElement(props.image, {style: imageStyle})}
    <div style={{...backgroundStyle, ...props.style}}>
      {props.children}
    </div>
  </>
  )
}
