// motion
import { motion } from 'motion/react'
import { fadeInUp } from '@/constants/motionVariants'

// constants
import { featureData } from '@/constants'

// components
import { FeatureCard } from './FeatureCard'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export const Feature = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <motion.p
            variants={fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-subtitle'
          >
            {featureData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {featureData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {featureData.sectionText}
          </motion.p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6'>
          {featureData.features.map((item, i) => (
            <FeatureCard
              key={i}
              classes={
                i < 2
                  ? 'md:col-span-2 lg:col-span-1 xl:col-span-3'
                  : 'xl:col-span-2'
              }
            >
              <>
                <div className='p-8'>
                  <motion.div
                    variants={fadeInUp}
                    className={`w-16 h-16 grid place-items-center rounded-full flex-shrink-0 ${item.iconBoxColor}`}
                  >
                    {item.icon}
                  </motion.div>

                  <motion.h3
                    variants={fadeInUp}
                    className='text-foreground text-xl font-medium mt-4 mb-3'
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    variants={fadeInUp}
                    className='text-muted-foreground line-clamp-2'
                  >
                    {item.desc}
                  </motion.p>

                  <motion.div variants={fadeInUp}>
                    <Button
                      variant='link'
                      className='p-0 h-auto mt-3'
                    >
                      Learn More
                      <ArrowRight />
                    </Button>
                  </motion.div>
                </div>

                {item?.imgSrc && (
                  <motion.figure
                    variants={fadeInUp}
                    className='p-6 pt-0'
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                    />
                  </motion.figure>
                )}
              </>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  )
}
