"use client"
import React from 'react'
import Home from './utils/home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function Page() {

  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <Home />
    </QueryClientProvider>

  )
}

export default Page
