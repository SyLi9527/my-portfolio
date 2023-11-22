import { lists } from "@/config/mainConfig"



export type MainPageCatalogs = string[]
export type SectionName = (typeof lists)[number]["name"]

export type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
  }
  
export type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
  }