"use client"
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Footer, Header, Hero, MobileFilters, ProductDetails, ShopSection } from './components'
import { search, showStuff, getCars, Car, deets } from './utlils';



function Home() {
  const {status} = deets()

  const { guys } = showStuff();
  const { searchTerm } = search();
  const [params, setParams] = useState<URLSearchParams | undefined>()
  const { isPending, data } = useQuery<Car[]>({
    queryKey: [guys, searchTerm],
    queryFn: () => getCars({ type: [...guys], searchTerm: searchTerm }),
    staleTime:10
  });
  useEffect(() => {
    const param = new URLSearchParams(window.location.search);
    setParams(param)
  }, []);
  if (!params) return;

  return (
    <div className='w-full'>
      <Header />
      <Hero />
      <ShopSection isPending={isPending} data={data} params={params} />
      <MobileFilters params={params} />
      <Footer/>
      {status&&<ProductDetails/>}
    </div>
  )
}

export default Home;
