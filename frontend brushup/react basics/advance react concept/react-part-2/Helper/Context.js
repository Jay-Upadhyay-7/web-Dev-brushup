"use client"
import React, { createContext } from 'react'
export const MyContext=createContext()
const context = ({children}) => {
    const username="jay";
  return (
    <div>
      <MyContext.Provider value={username}>
        {children}
      </MyContext.Provider>
    </div>
  )
}

export default context
