const color_text = '#FFFFFF'
const color_background = '#111111'
const color_primary = '#3097BB'
const color_secondary = '#6F523B'

export const theme = {
  color: color_text,
  background: color_background,

  // Typography
  fontFamily: 'Montserrat, sans-serif',
}

export default theme

export const container = (size = 'small') => {
  let new_container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
    backdropFilter: 'drop-shadow(4px 4px 4px #000000)',
  }

  switch (size) {
    case 'small':
      new_container.width = '500px'
      new_container.height = '300px'
      break
    case 'medium':
      new_container.width = '700px'
      new_container.height = '500px'
      break
    case 'large':
      new_container.width = '1000px'
      new_container.height = '700px'
      break
    case 'full':
      new_container.width = '100vw'
      new_container.height = '100vh'
      break
    default:
      break
  }

  return new_container
}

export const text = (size = 'small') => {
  let new_text = {
    color: color_text,

    fontFamily: theme.fontFamily,
    fontWeight: 'normal',

    margin: '8px',

    filter: 'drop-shadow(4px 4px 4px #000000)',
  }

  switch (size) {
    case 'small':
      new_text.fontSize = '21px'
      break
    case 'medium':
      new_text.fontSize = '54px'
      new_text.fontFamily = 'Cormorant, serif'
      new_text.paddingLeft = '16px'
      break
    case 'large':
      new_text.fontSize = '90px'
      new_text.fontFamily = 'Cormorant, serif'
      new_text.fontWeight = 'bold'
      break
    default:
      break
  }
  
  return new_text
}

export const button = (type = 'regular', hover = false) => {
  let new_button = {
    color: color_text,
    background: color_primary,

    fontFamily: theme.fontFamily,

    margin: '8px',
    padding: '24px',
    paddingLeft: '48px',
    paddingRight: '48px',
    borderRadius: '25px',
    border: 'none',

    cursor: 'pointer',
    filter: 'drop-shadow(4px 4px 4px #000000)',
    transition : 'filter 0.2s ease-in-out',
  }

  switch (type) {
    case 'regular':
      if (hover) {
        new_button.filter = 'drop-shadow(4px 4px 8px #000000) brightness(1.2)'
      }
      break
    case 'outline':
      new_button.background = 'transparent'
      new_button.border = `4px solid ${color_primary}`
      new_button.backdropFilter = 'blur(12px)'
      if (hover) {
        new_button.filter = 'drop-shadow(4px 4px 4px #000000) brightness(1.2)'
      }
      break
    case 'square':
      new_button.borderRadius = '0px'
      if (hover) {
        new_button.filter = 'drop-shadow(4px 4px 8px #000000) brightness(1.2)'
      }
      break
    case 'plain':
      new_button.background = 'transparent'
      new_button.border = 'none'
      if (hover) {
        new_button.filter = 'brightness(0.8)'
      }
      break
    default:
      break
  }
  
  return new_button
}