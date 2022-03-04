import { Children, DetailedHTMLProps, HTMLAttributes, ReactElement, useCallback, useMemo, useState } from 'react'
import cn from 'classnames'
import { AnimatePresence } from 'framer-motion'
import { Provider } from './context'
import Frame from './frame'
import styles from './styles.module.scss'

export interface CarouselProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactElement<any>[]
}

export function Carousel({
  className,
  children,
}: CarouselProps) {
  const [[current, direction], setCurrent] = useState([0, 0])
  
  const total = useMemo(() => Children.count(children), [children])

  const goNext = useCallback(() => {
    setCurrent(([n]) => {
      return [++n < total ? n : total - 1, 1]
    })
  }, [total])

  const goBack = useCallback(() => {
    setCurrent(([n]) => {
      return [--n > 0 ? n : 0, -1]
    })
  }, [])

  const context = useMemo(() => {
    return { goNext, goBack }
  }, [])

  return (
    <Provider value={ context }>
      <div className={ styles.container }>
        <div className={ cn(styles.carousel, className) }>
          <AnimatePresence
            initial={ false }
            custom={ direction }
          >
            <Frame
              direction={ direction }
              key={ current }
            >
              { children[current] }
            </Frame>
          </AnimatePresence>
        </div>
      </div>
    </Provider>
  )
}
