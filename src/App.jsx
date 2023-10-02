import { AppRouter } from "./router/AppRouter"
import { NavBar } from "./components/NavBar/NavBar"
import { BrowserRouter } from "react-router-dom"
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
