import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainRouter from './router/MainRouter'

function App() {

  return (
    <>
      <Header/>
      <main className='container py-8 min-h-[80vh]'>
        <MainRouter/>
      </main>
      <Footer/>
    </>
  )
}

export default App
