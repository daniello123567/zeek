import React from 'react'
import './utils/globals.css'

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Zeekr</title>
        <link rel="shortcut icon" href="https://previews.123rf.com/images/robertgoudappel/robertgoudappel1808/robertgoudappel180800124/105600103-modern-vector-logo-letter-z-z-letter-design-vector.jpg" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
