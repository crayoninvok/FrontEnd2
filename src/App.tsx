import { Route, Routes } from 'react-router-dom'
import '../src/Style.css'
import Homepage from './page/Homepage'
import Loginpage from './page/Loginpage'
import Timelinepage from './page/Timelinepage'


function App() {

  return (
    <div>
   <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/loginpage' element={<Loginpage/>}></Route>
    <Route path='/timelinepage' element={<Timelinepage />}></Route>

   </Routes>
    </div>
  )
}

export default App
