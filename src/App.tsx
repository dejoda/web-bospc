import { useEffect } from 'react'
import { Outlet } from 'react-router'
import './App.css'
import Footer from './layout/footer'
import Header from './layout/header'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default App
