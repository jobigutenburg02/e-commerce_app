import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

const NavBarLink = () => {

    const {isAuthenticated, setIsAuthenticated, username} = useContext(AuthContext)
    
    function logout(){
        localStorage.removeItem("access")
        setIsAuthenticated(false)
    }

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {isAuthenticated ?
        <>
        <li className="nav-item">
            <NavLink
            to="/profile"
            className={({isActive}) =>
                isActive 
                    ? "nav-link active fw-semibold" 
                    : "nav-link fw-semibold"
            }
            end
            >
            {`Hi ${username}`}
            </NavLink>
        </li>

        <li className="nav-item" onClick={logout}>
            <NavLink
            to="/" //points to homepage
            className={({isActive}) =>
                isActive 
                    ? "nav-link active fw-semibold" 
                    : "nav-link fw-semibold"
            }
            end
            >
            Logout
            </NavLink>
        </li>
        </>

        :

        <>
        <li className="nav-item">
            <NavLink
            to="/login"
            className={({isActive}) =>
                isActive 
                    ? "nav-link active fw-semibold" 
                    : "nav-link fw-semibold"
            }
            end
            >
                Login
            </NavLink>
        </li>

        <li className="nav-item">
            <NavLink
            to="/register"
            className={({isActive}) =>
                isActive 
                     ? "nav-link active fw-semibold" 
                     : "nav-link fw-semibold"
            }
            end
            >
                Register
            </NavLink>
        </li>

        </>
       }
        


    </ul>
  )
}

export default NavBarLink