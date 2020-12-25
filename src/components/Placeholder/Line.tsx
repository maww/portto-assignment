import React from 'react'
import style from './Line.module.css'

interface Props {
  className?: string
}

function Line(props: Props): JSX.Element {
  const { className } = props
  return <div className={`${className || ''} ${style.main}`} />
}

export default Line
