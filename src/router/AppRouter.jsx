import { Routes, Route } from "react-router-dom"
import { HomePage } from "../components/HomePage/HomePage"
import { Login } from "../components/Login/Login"

export const AppRouter = () => {

    return(

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>

    )
}