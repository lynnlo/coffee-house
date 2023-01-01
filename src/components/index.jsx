import * as React from "react"
import { container, text, button, anchor, input } from "../theme"

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
  <div style={{...container(props.size), ...props.style}}>
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90vw',
    height: '100px',
    padding: '0 50px',
  }
  return (
  <header style={{...container(), ...header_style, ...props.style}}>
    {props.children}
  </header>
  )
}

export const DynamicBackground = (props) => {
  let [position, setPosition] = React.useState({x: 0, y: 0})
  let [target, setTarget] = React.useState({x: 0, y: 0})

  let [imageStyle, setImageStyle] = React.useState({
    backgroundPosition: `0% 25%`,
  })

  let background_style = {
    display: 'flex',
    background: `linear-gradient(${props.intractable ? '90deg' : '0deg'}, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${props.src})` || 'transparent',
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: props.full ? '100vh' : 'fit-content',
    border: 'none',
  }
  
  let handleMouse = (e) => {
    setTarget({x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight})
  }

  React.useEffect(() => {
    let timer = setInterval(() => {
      setPosition({x: position.x + (target.x - position.x) / 10, y: position.y + (target.y - position.y) / 10})
      setImageStyle({...imageStyle, backgroundPosition: `${position.x * 10}% ${(position.y * 10) + 25}%`})
    }
    , 10)
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
  <div style={{...background_style, ...(props.intractable ? imageStyle : []), ...props.style}}>
    {props.children}
  </div>
  )
}