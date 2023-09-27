import React from 'react'

export default function Out(props) {
  return (
    <div>
        <div>
            {props.name} {props.title}
        </div>
        {props.city}
        <img src={props.url} alt="" />
    </div>
  )
}
