import React from 'react'
import './utils/globals.css'

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Zeekr</title>
        <link
        rel="preload"
        href="/car1.mp4"
        as="image"
        crossOrigin="anonymous"
      />
        <link
        rel="preload"
        href="/car1.png"
        as="image"
        crossOrigin="anonymous"
      />
        <link
        rel="preload"
        href="/car2.mp4"
        as="image"
        crossOrigin="anonymous"
      />
        <link
        rel="preload"
        href="/car3.mp4"
        as="image"
        crossOrigin="anonymous"
      />
        <link
        rel="preload"
        href="/mainfooter.mp4"
        as="image"
        crossOrigin="anonymous"
      />
        <link
        rel="preload"
        href="/mainfooterloop.mp4"
        as="image"
        crossOrigin="anonymous"
      />
        <link rel="shortcut icon" href="https://previews.123rf.com/images/robertgoudappel/robertgoudappel1808/robertgoudappel180800124/105600103-modern-vector-logo-letter-z-z-letter-design-vector.jpg" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
