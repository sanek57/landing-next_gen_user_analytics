import React, {
  useCallback,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react'

// motion
import { frame, motion, useMotionValue } from 'motion/react'
import { staggerContainer } from '@/constants/motionVariants'

interface FeatureCardProps extends PropsWithChildren {
  classes?: string
}

export const FeatureCard: FC<FeatureCardProps> = ({ classes, children }) => {
  const glowRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const [showGlow, setShowGlow] = useState<boolean>(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect()

    frame.read(() => {
      x.set(e.clientX - Number(rect?.left))
      y.set(e.clientY - Number(rect?.top))
    })
  }, [x, y])

  return (
    <motion.div
      variants={staggerContainer}
      initial='start'
      whileInView='end'
      viewport={{ once: true }}
      className={`relative overflow-hidden p-[1px] ring ring-inset ring-zinc-800/50 rounded-[14px] ${classes}`}
    >
      <div
        className='relative isolate bg-card backdrop-blur-m rounded-xl overflow-hidden'
        ref={cardRef}
        onMouseOver={() => setShowGlow(true)}
        onMouseOut={() => setShowGlow(false)}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>

      {/* border effect */}
      <motion.div
        ref={glowRef}
        className='absolute -top-[150px] -left-[150px] rounded-full -z-10 w-[300px] h-[300px] bg-foreground blur-[50px] overflow-hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: Number(showGlow) }}
        style={{ x, y }}
      ></motion.div>
    </motion.div>
  )
}
