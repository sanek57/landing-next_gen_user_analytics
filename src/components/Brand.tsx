import React from 'react'

// Motion
import {
  motion,
  stagger,
  type Variants,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'

import { fadeInUp, staggerContainer } from '@/constants/motionVariants'

// contants
import { brands } from '@/assets'

export const Brand = () => {
  return (
    <section className='section'>
      <div className='container max-w-screen-lg'>
        <motion.p
          variants={fadeInUp}
          initial='start'
          whileInView='end' // отрабатывает каждый раз при появлении
          viewport={{ once: true }} // с таким флагом отрабатывает единожды
          className='text-center mb-4 md:mb-6'
        >
          Powering data insights for today's startup and tomorrow's leader.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial='start'
          whileInView='end' // отрабатывает каждый раз при появлении
          viewport={{ once: true }} // с таким флагом отрабатывает единожды
          className='flex justify-center flex-wrap gap-5 md:gap-10'
        >
          {brands.map((brand, i) => (
            <motion.figure
              variants={fadeInUp}
              key={i}
            >
              <img
                src={brand}
                alt='Missing brand...'
                className='opacity-[0.6]'
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
