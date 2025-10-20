// Components
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { MobileMenu } from './MobileMenu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'

// Assets
import { Logo } from './Logo'

// Constant

import { navMenu } from '../constants'

export const Header = () => {
  return (
    <header className='h-16 grid grid-cols-1 items-center md:h-20 lg:h-24'>
      <div className='container flex justify-between lg:grid lg:grid-cols-[1fr_3fr_1fr]'>
        <Logo variant='icon' />

        {/* for large size */}
        <NavigationMenu className='max-lg:hidden mx-auto'>
          <NavigationMenuList>
            {navMenu.map(item => (
              <NavigationMenuItem key={item.label}>
                {item?.submenu ? (
                  <>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid grid-cols-2 gap-2 p-2 w-[640px]'>
                        {item.submenu.map(sub => (
                          <li key={sub.label}>
                            <NavigationMenuLink asChild>
                              <a
                                href={sub.href}
                                className='flex flex-row gap-2 select-none p-2 rounded-sm transition-colors hover:bg-foreground/5'
                              >
                                <div className='w-10 h-10 bg-foreground/10 rounded-sm shadow-sm border-t border-foreground/5 flex-shrink-0 grid place-items-center'>
                                  {sub.icon}
                                </div>
                                <div>
                                  <div className='text-[13px] leading-normal mb-1'>
                                    {sub.label}
                                  </div>
                                  <p className='text-[13px] leading-normal text-muted-foreground'>
                                    {sub.desc}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex items-center gap-2 justify-end max-lg:hidden'>
          <Button variant='ghost'>Sign In</Button>
          <Button>Free Trial</Button>
        </div>

        {/* for less large size */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='lg:hidden'
            >
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align='end'
            className='bg-background/50 backdrop-blur-3xl border-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden'
          >
            <MobileMenu navMenu={navMenu} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}
