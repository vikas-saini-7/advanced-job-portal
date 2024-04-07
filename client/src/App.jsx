import { useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainRouter from './router/MainRouter'
import { useDispatch } from 'react-redux'
import { loginUserWithToken } from './redux/actions/authActions'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('token')){
      const token = localStorage.getItem('token');
      dispatch(loginUserWithToken(token))
    }
  },[])

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
