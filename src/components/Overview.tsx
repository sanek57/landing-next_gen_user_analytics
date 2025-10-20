import React from 'react'

// motion
import { motion } from 'motion/react'
import {
  fadeInLeft,
  fadeInRight,
  fadeInScale,
  fadeInUp,
  staggerContainer,
} from '@/constants/motionVariants'

// contstants
import { overviewData } from '@/constants'

// assets
import { overviewBanner } from '@/assets'

// components
import ReactPlayer from 'react-player'
import { AspectRatio } from './ui/aspect-ratio'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { Play } from 'lucide-react'
import { Button } from './ui/button'

export const Overview = () => {
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
            {overviewData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {overviewData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {overviewData.sectionText}
          </motion.p>
        </div>

        <div>
          <motion.div
            variants={fadeInScale}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='relative max-w-4xl mx-auto shadow-xl'
          >
            <motion.figure className=''>
              <img
                src={overviewBanner}
                width={900}
                height={601}
                alt=''
              />
            </motion.figure>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant='secondary'
                  size='icon'
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150'
                >
                  {/* визуальное скрытие элемента - с доступом программа для (screen-reader) */}
                  <div className='sr-only'>Play video</div>
                  <Play
                    fill='#fff'
                    size={50}
                  />
                </Button>
              </DialogTrigger>
              <DialogContent className='p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]'>
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    src='https://www.youtube.com/watch?v=UTItsV_44K4&list=WL&index=9&pp=gAQBiAQB'
                    style={{
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </motion.div>

          <div className='max-w-4xl mx-auto grid grid-cols-1 gap-5 mt-8 md:mt-16 xl:grid-cols-[3fr_2.5fr] xl:items-center'>
            <motion.p
              variants={fadeInRight}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='section-title text-center lg:max-w-[30ch] lg:mx-auto xl:text-left'
            >
              {overviewData.listTitle}
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-8'
            >
              {overviewData.list.map(item => (
                <motion.div
                  variants={fadeInLeft}
                  key={item.text}
                  className='text-center'
                >
                  <h3 className='text-3xl'>{item.title}</h3>
                  <p className='text-muted-foreground'>{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
