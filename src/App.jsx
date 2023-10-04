import { AppRouter } from "./router/AppRouter"
import { NavBar } from "./components/NavBar/NavBar"
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.sass'

function App() {

  return (
    <BrowserRouter>
        <NavBar/>
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App
