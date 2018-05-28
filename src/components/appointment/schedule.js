import React from 'react'
export const Schedule = ({ hour, className, onPress, marked }) => {
  className = marked ? `${className} Marked` : className
  return (
    <a href='#' className={className} onClick={event => onPress(event)}>
      {hour}
    </a>
  )
}
