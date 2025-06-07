"use client"
import React from 'react'
import Home from './utils/home'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function page() {

  const client = new QueryClient()

  return (
    <div >
    <QueryClientProvider client={client}>
      <Home />
    </QueryClientProvider>
    </div>
  )
}

export default page
