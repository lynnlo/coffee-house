const color_text = '#FFFFFF'
const color_background = '#111111'
const color_background_contrast = '#222222'
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
      new_text.fontSize = '1.4rem'
      break
    case 'medium':
      new_text.fontSize = '3.6rem'
      new_text.fontFamily = 'Cormorant, serif'
      new_text.paddingLeft = '16px'
      break
    case 'large':
      new_text.fontSize = '6.0rem'
      new_text.fontFamily = 'Cormorant, serif'
      new_text.fontWeight = 'bold'
      break
    default:
      break
  }
  
  return new_text
}

export const button = (type = 'default', hover = false, color = 'primary') => {
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

  switch (color) {
    case 'primary':
      new_button.background = color_primary
      break
    case 'secondary':
      new_button.background = color_secondary
      break
    default:
      new_button.color = color
      break
  }

  if (hover) {
    new_button.filter = 'drop-shadow(4px 4px 8px #000000) brightness(1.2)'
  }

  switch (type) {
    case 'outline':
      new_button.background = 'transparent'
      new_button.border = `4px solid ${color_primary}`
      new_button.backdropFilter = 'blur(12px)'
      break
    case 'square':
      new_button.borderRadius = '0px'
      break
    case 'plain':
      new_button.background = 'transparent'
      new_button.border = 'none'
      if (hover) {
        new_button.filter = 'brightness(0.8)'
      }

      switch (color) {
        case 'primary':
          new_button.color = color_text
          break
        default:
          new_button.color = color
          break
      }
      break
    default:
      break
  }
  
  return new_button
}

export const input = (type = 'default', hover = false, color = 'primary') => {
  let new_input = {
    color: color_text,
    background: color_background_contrast,
    placeholder: color_text,

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

  switch (color) {
    case 'primary':
      new_input.background = color_background_contrast
      break
    case 'secondary':
      new_input.background = color_primary
      break
    default:
      new_input.color = color
      break
  }
  
  switch (type) {
    case 'outline':
      new_input.background = 'transparent'
      new_input.border = `4px solid ${color_background_contrast}`
      new_input.backdropFilter = 'blur(12px)'
      break
    case 'square':
      new_input.borderRadius = '0px'
      break
    case 'plain':
      new_input.background = 'transparent'
      new_input.border = 'none'
      if (hover) {
        new_input.filter = 'brightness(0.8)'
      }

      switch (color) {
        case 'primary':
          new_input.color = color_text
          break
        default:
          new_input.color = color
          break
      }
      break
    default:
      break
  }
  
  return new_input
}

export const anchor = (type = 'default', hover = false, color = 'primary') => {
  let new_anchor = {
    color: color_primary,
    textDecoration: 'none',
    cursor: 'pointer',
    filter: 'drop-shadow(4px 4px 4px #000000)',
    transition : 'filter 0.2s ease-in-out',
  }

  switch (color) {
    case 'primary':
      new_anchor.color = color_primary
      break
    case 'secondary':
      new_anchor.color = color_secondary
      break
    default:
      new_anchor.color = color
      break
  }
  
  switch (type) {
    case 'underline':
      new_anchor.textDecoration = 'underline'
      break
    default:
      break
  }

  if (hover) {
    new_anchor.filter = 'drop-shadow(4px 4px 8px #000000) brightness(1.2)'
  }
  
  return new_anchor
}