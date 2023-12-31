import React, { createContext } from 'react'
import { RadioContext } from './Radio'

type RadioGroupProperties = { 
    value: any,
    onChange: any, 
    children: any
}


const RadioGroup = ({ value, onChange, children }: RadioGroupProperties) => {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
    {children}
  </RadioContext.Provider>
  )
}

export default RadioGroup
