// Components
import { Brand } from './components/Brand'
import { Feature } from './components/Feature'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

// lenis - плавная прокрутка
import { ReactLenis, useLenis } from 'lenis/react'
import { Process } from './components/Process'
import { Overview } from './components/Overview'
import { Review } from './components/Review'
import { Blog } from './components/Blog'
import { Cta } from './components/Cta'

function App() {
  const lenis = useLenis(lenis => {
    // called every scroll
    console.log(lenis)
  })

  return (
    <ReactLenis root>
      <div className='relative isolate overflow-hidden'>
        <Header />
        <main>
          <Hero />
          <Brand />
          <Feature />
          <Process />
          <Overview />
          <Review />
          <Blog />
          <Cta />
        </main>
      </div>
    </ReactLenis>
  )
}

export default App
