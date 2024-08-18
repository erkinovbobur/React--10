
import './App.css'
import { Suspense, lazy } from 'react'
import Nav from './components/nav/Nav'
import { Route, Routes } from 'react-router-dom'
const App = () => { 

  const Home = lazy(() => import("./routes/Home"))
  const Single = lazy(() => import("./routes/single/Single"))


  return (
    <>
<Nav/>

<Routes>
<Route path="/" element={<Suspense  fallback="Loading..."><Home/></Suspense>}/>
<Route path="/single" element={<Suspense fallback="Loading..."><Single/></Suspense>}/>
</Routes>
   
    </>
  )
}

export default App
