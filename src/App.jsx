
import './App.css'
import Header from './pages/Header'
import Sidebar from './pages/Sidebar'
import Main from './pages/Main'
function App() {


  return (
    <>
      <Header />
      <div className='container'>
        <Sidebar />
        <Main />
      </div>
      
    </>
  )
}

export default App
