import { cloneElement, PropsWithChildren, ReactElement, useState } from 'react'
import { AnimatePresence, motion, Transition, Variants } from 'framer-motion'
import styles from './styles.module.scss'

export interface FrameProps extends PropsWithChildren<unknown> {
  direction: number
}

export interface CarouselChildProps {
  ready: boolean
}

export default function Frame({
  direction,
  children
}: FrameProps) {
  const [ready, setReady] = useState(false)

  return (
    <motion.div
      className={ styles.frame }
      variants={ variants }
      custom={ direction }
      initial="start"
      animate="current"
      exit="end"
      transition={ transition }
      onAnimationStart={ () => setReady(false) }
      onAnimationComplete={ () => setReady(true) }
    >
      <AnimatePresence initial>
        { cloneElement(children as ReactElement, { ready }) }
      </AnimatePresence>
    </motion.div>
  )
}

const variants = {
  start: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%'
  }),
  current: {
    x: '0%'
  },
  end: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%'
  })
} as Variants

const transition = {
  duration: 1,
  stiffness: 0,
} as Transition
