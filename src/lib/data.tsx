import { BicycleIcon, BusIcon, CarIcon } from "../components/Atoms/Icons";



export type autoTypes = {
    title:string
    icon: JSX.Element | (() => JSX.Element);
  };
  
  export const sideBarItems: Array<autoTypes> = [
    {
        title:'Car',
      icon: CarIcon({})
      
    },
    {
        title:'Bus',
      icon: BusIcon({})
      
    },
    {
        title:'Tractor',
      icon: BusIcon({})
      
    },
    {
        title:'Bus',
      icon: BusIcon({})
      
    },
    {
        title:'Bicycle',
      icon: BicycleIcon({})
      
    },
   
  
]