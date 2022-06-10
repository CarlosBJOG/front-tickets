import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthRouter } from "./AuthRouter"
import { DashBoardRoutes } from "./DashBoardRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoute"

export const AppRouter = () => {

  const [isLoggedIn] = useState(false);
    return (
      <>
        <BrowserRouter>
            <Routes>
                
                <Route path="/auth/*" element={

                      <PublicRoutes isAuth={isLoggedIn}>
                          <AuthRouter/>
                      </PublicRoutes>
                }/>

                <Route path="/*" element={ 

                      <PrivateRoutes isAuth={isLoggedIn}>
                          <DashBoardRoutes />
                      </PrivateRoutes> 
                    }
                />
      
            </Routes>

        </BrowserRouter>
      </>
    )
}
