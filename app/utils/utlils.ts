import { supabase } from "@/scripts/cron"
import { create } from "zustand"

type carInf = {
  image:string,
    name:string,
    description:string,
    purePerformances:string[]
  }

const CarInfo:carInf[] = [
  {
    image:"/car1.webp",
    name:"x",
    description:"Golden ratio proportions Measuring 4,450mm long by 1,572mm high and with a 2,750mm wheelbase.",
    purePerformances:["0-100km/hin 3.3sec(AWD)","580kWPeak Power(AWD)","750kmCLTC Range(RWD)"]
  },
  {
    image:"/car2.webp",
    name:"001",
    description:"Zeekr 001 is inspired by the classic style of the past and adds muscular lines to the coupe",
    purePerformances:["0-100km/hin 3.3sec(AWD)","580kWPeak Power(AWD)","240km/hTop Speed"]
  },
  {
    image:"/car3.webp",
    name:"007",
    description:"Featuring the industry's largest 1.69 square meters ultra-large nano-silver plated privacy dome.",
    purePerformances:["0-100km/hin 3.3sec(AWD)","580kWPeak Power(AWD)","240km/hTop Speed"]
  }
]
type Standard = {
  currentInfo:carInf[],
}
const standard = create<Standard>((set)=>({
  currentInfo:[...CarInfo],
}))





type Car = {
  id?: number,
  created_at?: string,
  Name: string,
  Type: string, Price: 30000,
  image_url:string,
  specifics:{
    seats:number,
    stars:number,
    gearShift:"Automatic"|"Manual",
    design_sha:number
  }
}



const getCars = async (stuffs:{type:string[],searchTerm:string|null})=>{
  const eri = stuffs.searchTerm? `%${stuffs.searchTerm}%` : '%'
  const bro = stuffs.type.length ===0 ? ['Suv','Minivan','Hatchback']: [...stuffs.type]
  const { data, error } = await supabase
  .from('car')
  .select('*')
  .ilike('Name', `${eri}`)
   console.log(error)

  if(data){return data}

  throw error;



}

type dee = { guys:string[],addGuys:(newguys:string[])=>void}
type deek = { searchTerm:string|null,updateSearch:(st:string)=>void}
const showStuff = create<dee>((set) => ({
  guys: [],
  addGuys: (newGuys) => set((state) => ({ guys: [...newGuys] })),
}));
const search = create<deek>((set) => ({
  searchTerm: null,
  updateSearch: (st) => set(() => ({ searchTerm: `${st}` })),
}));
type carj = {data:Car[],setCars:(cars:Car[])=>void}

export {CarInfo,type carInf,standard,getCars,type Car,showStuff,search}
