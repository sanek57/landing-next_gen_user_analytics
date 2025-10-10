import React from 'react'

// components

// Constants
import { heroData } from '../constants'
import { Button } from './ui/button'

// Assets
import { heroBanner } from '@/assets'

export const Hero = () => {
  return (
    <section className='py-10 md:py-16'>
      <div className='container text-center'>

        <div className='max-w-screen-md mx-auto'>
          <p className='text=sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-3xl mb-6 md:mb-10'>{heroData.sectionSubtitle}</p>
          <h2 className='text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl'>
            {heroData.sectionTitle}
            <span className='relative isolate ms-4'>{heroData.decoTitle}
                <span className='absolute -z-10 top-2 -left-6 -right-3 bottom-0.5 bg-foreground/5 rounded-full px-8 ms-3 border-t border-foreground/20 shadow-[inset_0px_0px_30px_0px] shadow-foreground/20 md:top-3 md:bottom-1 lg:top-3 lg:bottom-1'>

                </span>
            </span>
          </h2>
          <p className=''>{heroData.sectionText}</p>

          <div className=''>
            <Button>Start Free Trial</Button>
            <Button variant='ghost'>Whatch Demo</Button>
          </div>
        </div>

        <div className=''>
          <figure>
            <img
              src={heroBanner}
              width={1468}
              height={815}
              alt='Analytix dashbord'
            />
          </figure>
        </div>

      </div>
    </section>
  )
}
