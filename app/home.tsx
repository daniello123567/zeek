import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Header, Hero, MobileFilters, ShopSection} from './utils/components'
import { search, showStuff,getCars,Car } from './utils/utlils';



function Home() {
const {guys} = showStuff();
const {searchTerm} = search();
const {isPending,error,data} = useQuery<Car[]>({
    queryKey:[guys,searchTerm],
    queryFn:()=>getCars({type:[...guys],searchTerm:searchTerm}),
  });

const params =  new URLSearchParams(window.location.search);


  return (
    <div className='w-full'>
      <Header/>
      <Hero/>
      <ShopSection isPending={isPending} data={data} params={params}/>
      {<MobileFilters params={params}/>}
    </div>
  )
}

export default Home
