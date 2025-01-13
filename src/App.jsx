import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Users from "./pages/Users.jsx";
import Analytics from "./pages/Analytics.jsx";
import Settings from "./pages/Settings.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/analytics' element={<Analytics/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
