import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Settings from "./pages/Settings.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
