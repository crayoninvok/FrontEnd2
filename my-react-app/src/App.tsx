import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Registerpage from "./pages/Registerpage"
import Navbar from "./component/navbar"
import DetailUserPage from "./pages/DetailUserPage"

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/register" element={<Registerpage/>} />
        <Route path="/:userId" element={<DetailUserPage/>} />
      </Routes>
    </div>
  )
}

export default App
