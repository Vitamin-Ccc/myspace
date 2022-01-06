import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"

const Layout = () => {
  const { authenticated } = useContext(AuthContext);
  const renderAuthLinks = () => {
    if(authenticated){
      return <div>Logout</div>
    }
    return (
      <>
        <div>
          <Link to='/register'>Register</Link>
        </div>
        <div>
          <Link to='/login'>Login</Link>
        </div>
      </>
    )
  }
  return (
    <div>
      <div style={styles.navbar}>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/public'>Public</Link>
        </div>
        <div>
          <Link to='/protected'>Protected</Link>
        </div>
        {renderAuthLinks()}
      </div>
      <div style={styles.pageContainer}>
        <Outlet />
      </div>
    </div>
  )
}

const styles = {
  navbar: {
    display: "flex",
    border: "1px solid",
  },

  pageContainer: {
    maxWidth: "1000px",
    margin: "auto",
    border: "1px solid red",
    padding: "10px",
  }
}


export default Layout;