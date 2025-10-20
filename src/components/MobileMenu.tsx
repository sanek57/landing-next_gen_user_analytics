// Components
import type { FC } from 'react'
import { Button } from './ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible'
import { Separator } from './ui/separator'

// types
import type { MenuItem } from '@/types'
import { ChevronsUpDown } from 'lucide-react'
interface MobileMenuProps {
  navMenu: MenuItem[]
}

// Assets

export const MobileMenu: FC<MobileMenuProps> = ({ navMenu }) => {
  return (
    <div className=''>
      <ul className='mb-3'>
        {navMenu.map(item => (
          <li key={item.label}>
            {item?.submenu ? (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant='ghost'
                    className='w-full justify-between'
                  >
                    {item.label}
                    <ChevronsUpDown />
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className='ps-2'>
                  <ul className='border-l border-l-muted-foreground/25'>
                    {item.submenu.map(sub => (
                      <li key={sub.label}>
                        <Button
                          asChild
                          variant='ghost'
                          className='w-full justify-start text-muted-foreground dark:hover:bg-transparent'
                        >
                          <a href={sub.href}>{sub.label}</a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button
                asChild
                variant='ghost'
                className='w-full justify-start'
              >
                <a
                  href={item.href}
                  className='ps-3'
                >
                  {item.label}
                </a>
              </Button>
            )}
          </li>
        ))}
      </ul>
      <Separator className='bg-muted-foreground/25' />

      <div className='flex items-center gap-2 mt-2 me-2'>
        <Button
          variant='ghost'
          className='w-1/2'
        >
          Sign in
        </Button>
        <Button className='w-1/2'>Free Trial</Button>
      </div>
    </div>
  )
}
