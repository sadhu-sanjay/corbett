import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderResponsive } from './components/header/header'
import { HeroImageRight } from './landing'
import { ContactUs } from './components/contact/contact'




// scroll to the bottom of the page
function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  })
}

function App() {
  const [count, setCount] = useState(0)
  return (
  <>
      <HeaderResponsive />
      <HeroImageRight callback= {scrollToBottom} />
      {/* <CarouselCard />  */}
      {/* <BadgeCard {...item} /> */}
      <ContactUs />
      {/* <FooterLinks /> */}
    </>
  )

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export default App
