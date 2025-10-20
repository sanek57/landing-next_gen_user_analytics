import React from 'react'

// motion
import { motion } from 'motion/react'
import { fadeInUp, staggerContainer } from '@/constants/motionVariants'

// constans
import { reviewData } from '@/constants'

// components
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Quote } from 'lucide-react'

// assets

export const Review = () => {
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
            {reviewData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {reviewData.sectionTitle}
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
        >
          {reviewData.reviewCard.map(item => (
            <motion.div key={item.title} variants={fadeInUp}>
              <Card className='relative h-full'>
                <CardHeader>
                  <CardTitle className='text-lg'>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground line-clamp-3'>
                    {item.text}
                  </p>
                </CardContent>
                <CardFooter className='block'>
                  <p>{item.reviewAuthor}</p>
                  <p className='text-xs text-muted-foreground'>{item.date}</p>
                </CardFooter>

                <div className='absolute bottom-0 right-3 opacity-[0.02]'>
                  <Quote size={80} />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
