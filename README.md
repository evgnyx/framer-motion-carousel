# framer-motion-carousel

An example of React carousel built with TypeScript and Framer Motion animation library.

## Usage

**CarouselComponent.tsx**:
```jsx
import { Carousel } from './src/'
import Slide1 from './Slide1.tsx'
// ...

export default function CarouselComponent() {
  return (
    <div>
      <Carousel>
        {/* map some slides here */}
        <Slide1 />
        <Slide2 />
        <Slide3 />
      </Carousel>
    </div>
  )
}
```

**Slide1.tsx**:
```jsx
import { useState, useEffect } from 'react'
import { CarouselChildProps } from './src/frame'
import { useCarousel } from './src/context'

/**
 * @param {boolean} ready Indicates if carousel transition animation is active
 */
export default function Slide1({
  ready, // return true/false when animation is active/finished
}: Partial<CarouselChildProps>) {
  const { goBack, goNext } = useCarousel()
  
  const [state, setState] = useState()
  
  useEffect(() => {
    if (ready) {
      setState(/* do something, when slide transition is finished */)
    }
  }, [ready])

  return (
    <div>
      <button onClick={ goBack }>
        back
      </button>
      <button onClick={ goNext }>
        forward
      </button>
      {/* Some slide content */}
    </div>
  )
}
```
