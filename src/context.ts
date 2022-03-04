import { createContext, useContext } from 'react'

export interface CarouselControls {
  goBack(): void
  goNext(): void
}

const CarouselContext = createContext({} as CarouselControls)

export const Provider = CarouselContext.Provider
export const useCarousel = () => {
  return useContext(CarouselContext)
}
