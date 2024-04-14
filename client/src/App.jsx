import { useEffect } from 'react'
import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import MainRouter from './router/MainRouter'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserWithToken } from './redux/actions/authActions'

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  useEffect(()=>{
    if(localStorage.getItem('token')){
      const token = localStorage.getItem('token');
      dispatch(loginUserWithToken(token))
    }
  },[])

  return (
    <>
      {loading ?
      <p className='text-center pt-[10%]'>Loading...</p>
      :
      <>
      <Header/>
      <main className='container py-8 min-h-[80vh]'>
        <MainRouter/>
      </main>
      <Footer/>
      </>
      }
    </>
  )
}

export default App
