import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const timeout = 125
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
    filter: 'blur(12px)',
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out, filter ${timeout}ms ease-in-out`,
    opacity: 1,
    filter: 'blur(0px)',
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out, filter ${timeout}ms ease-in-out`,
    opacity: 0,
    filter: 'blur(12px)',
  },
}

const Transition = ({ children, location }) => {
  return (
    <TransitionGroup> 
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {status => (
          <div style={{...getTransitionStyles[status]}}>
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}

export default Transition