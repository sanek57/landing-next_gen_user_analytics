// Components
import { Brand } from './components/Brand'
import { Feature } from './components/Feature'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

// lenis - плавная прокрутка
import { ReactLenis, useLenis } from 'lenis/react'

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
          <Feature/>
        </main>
      </div>
    </ReactLenis>
  )
}

export default App
