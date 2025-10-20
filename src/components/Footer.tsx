import React from 'react'

// motion

// constants
import { footerData } from '@/constants'

// components
import { Logo } from './Logo'

export const Footer = () => {
  return (
    <section className='section !pb-0'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4'>
          <Logo />

          <div className='grid grid-cols-2 gap-x-2 gap-y-8 text-sm sm:grid-cols-4 lg:col-span-3'>
            {footerData.links.map(item => (
              <ul key={item.title}>
                <p className='mb-4'>{item.title}</p>

                {item.items.map(link => (
                  <li
                    key={link.href}
                    className='text-muted-foreground'
                  >
                    <a
                      href={link.href}
                      className='inline-block py-1 transition-colors hover:text-primary'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className='flex justify-between mt-12 border-t border-gray-600/10 py-6'>
          <a
            href='https://youtube.com'
            target='_blank'
            className=''
          >
            {footerData.copyright}
          </a>

          <div className='social-wrapper'>
            <ul className='flex gap-5'>
              {footerData.socialLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target='_blank'
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
