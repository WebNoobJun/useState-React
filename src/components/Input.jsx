import React from 'react'

export default function Input(props) {
  return (
    <>
        <label htmlFor="input">{props.name}</label>
        <input name='input' type="text" onChange={props.onChange} />
    </>
  )
}
