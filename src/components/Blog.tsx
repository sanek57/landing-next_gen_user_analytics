import React from 'react'

// motion
import { motion } from 'motion/react'
import { fadeInUp, staggerContainer } from '@/constants/motionVariants'

// constants
import { blogData } from '@/constants'

// compontens
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

export const Blog = () => {
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
            {blogData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {blogData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {blogData.sectionText}
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'
        >
          {blogData.blogs.map(item => (
            <motion.div
              variants={fadeInUp}
              key={item.title}
              className=''
            >
              {/* group - стили к дочерним - на основе состояния родительского */}
              <Card className='group'>
                <CardHeader>
                  <figure className='rounded-lg overflow-hidden'>
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className='img-cover group-hover:scale-105 transition-transform duration-500'
                    />
                  </figure>
                </CardHeader>

                <CardContent>
                  <Badge className='mb-3'>{item.badge}</Badge>
                  <CardTitle className='leading-normal'>
                    <a
                      href='#'
                      className=' hover:text-primary transition-colors'
                    >
                      {item.title}
                    </a>
                  </CardTitle>
                </CardContent>

                <CardFooter className='gap-3'>
                  <Avatar>
                    <AvatarImage src={item.author.avatarSrc} />
                    <AvatarFallback>{item.author.authorName}</AvatarFallback>
                  </Avatar>

                  <div>
                    <p className='text-sm pb-0.5'>{item.author.authorName}</p>
                    <div className='flex items-center gap-1.5'>
                      <time
                        dateTime={item.author.publishDate}
                        className='text-sm text-muted-foreground'
                      >
                        {item.author.publishDate}
                      </time>

                      <span className='w-1 h-1 bg-muted-foreground/50 rounded-full'></span>

                      <p className='text-sm text-muted-foreground'>
                        {item.author.readingTime}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
