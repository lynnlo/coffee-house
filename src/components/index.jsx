import * as React from "react"
import { useEffect } from "react"
import { container, text, button } from "../theme"

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
    style={{...text('small'), ...button(props.type || 'regular', hover), ...props.style}}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onFocus={() => setHover(true)}
    onBlur={() => setHover(false)}
  >
    {props.children}
  </button>
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
    background: `linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${props.src})` || 'transparent',
    backgroundPosition: `0% 25%`,
  })

  let background_style = {
    display: 'flex',
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: props.full ? '100vh' : 'fit-content',
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
  }, [target])

  return (
  <div style={{...background_style, ...imageStyle, ...props.style}} onMouseMove={handleMouse}>
    {props.children}
  </div>
  )
}