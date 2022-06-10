import { Navigate, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../components/banco/HomeScreen"

export const DashBoardRoutes = () => {
  return (
    <div>
        <Routes>
            <Route exact path="/home" element={<HomeScreen />} />
            <Route 
                
                path="*"
                element={<Navigate to="/home" />} 
            /> 
        </Routes>
    </div>
  )
}
