const color_text = '#FFFFFF'
const color_background = '#111111'
const color_primary = '#6F523B'
const color_secondary = '#3097BB'

export const theme = {
  color: color_text,
  background: color_background,

  // Typography
  fontFamily: 'Montserrat, sans-serif',
}

export default theme

export const container = (size) => {
  let new_container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
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

export const text = (size) => {
  let new_text = {
    color: color_text,
    fontFamily: theme.fontFamily,
    fontWeight: 'normal',
    margin: '8px',
  }

  switch (size) {
    case 'small':
      new_text.fontSize = '27px'
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