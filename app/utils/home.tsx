"use client"
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Header, Hero, MobileFilters, ShopSection } from './components'
import { search, showStuff, getCars, Car } from './utlils';



function Home() {
  const { guys } = showStuff();
  const { searchTerm } = search();
  const [params,setParams] = useState<URLSearchParams|undefined>()
  const { isPending, data } = useQuery<Car[]>({
    queryKey: [guys, searchTerm],
    queryFn: () => getCars({ type: [...guys], searchTerm: searchTerm }),
  });
useEffect(()=>{
    const param = new URLSearchParams(window.location.search);
  setParams(param)
},[]);
if(!params)return;


  return (
    <div className='w-full'>
      <Header />
      <Hero />
      <ShopSection isPending={isPending} data={data} params={params} />
      {<MobileFilters params={params} />}
    </div>
  )
}

export default Home
