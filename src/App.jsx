import { BrowserRouter, Routes, Route } from "react-router"
import About from './pages/about'
import Login from './pages/login'
import NotesPage from './pages/notes'
import Signup from './pages/signup'
import "@picocss/pico/css/pico.min.css"
import "./App.css"

function App() {

  
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route index element={<Signup />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

