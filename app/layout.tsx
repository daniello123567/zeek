"use client"
import React from 'react'
import './utils/globals.css'
function Rootlayout({children}:{children:React.ReactNode}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

export default Rootlayout
