import { Link, NavLink } from "react-router-dom"



export const HomeScreen = () => {



  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
    <Link 
        className="navbar-brand" 
        to="/"
    >
        PichoBank
    </Link>

    <div className="navbar-collapse">
        <div className="navbar-nav">

            <NavLink 
                
                className={ ({ isActive }) => 'nav-item nav-link' + (isActive ? ' active' : '')}
                to="/marvel"
            >
                Cajas
            </NavLink>

            <NavLink 
                
                className={ ({ isActive }) => 'nav-item nav-link' + (isActive ? ' active' : '')}
                to="/dc"
            >
                Clientes
            </NavLink>

    
        </div>
    </div>

    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
        <ul className="navbar-nav ml-auto">

            <span className="nav-item nav-link text-info">
              
            </span>

            <button
                className="nav-item nav-link btn btn-primary" 
               
            >
                Logout
            </button>
        </ul>
    </div>
</nav>
  )
}
