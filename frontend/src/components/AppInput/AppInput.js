import React from 'react'
import { Label, Input } from 'reactstrap'

const AppInput = props => (
  <React.Fragment>
    {props.label === true ? (
      <Label for={props.title}>{props.title}</Label>
    ) : null}
    <Input
      type={props.type}
      name={props.title}
      onChange={text => props.onChange(text)}
      placeholder={props.placeholder ? props.placeholder : null}
    />
  </React.Fragment>
)

export default AppInput
