import * as React from "react"
import theme, { container, text } from "../theme"

import './index.css'

const IndexPage = () => {
  return (
    <main style={theme}>
      <div style={{...container('full'), flexDirection: 'row'}}>
        <div style={{...container('medium'), alignItems: 'start'}}>
          <h1 style={text('large')}>Greco Company</h1>
          <h1 style={text('medium')}>New Age Coffee Roasters</h1>
        </div>
        <div style={{...container('small')}}>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>