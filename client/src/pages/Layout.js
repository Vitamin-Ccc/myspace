import { Link, Outlet } from "react-router-dom"

const Layout = () => {
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
        <div>
          <Link to='/register'>Register</Link>
        </div>
        <div>
          <Link to='/login'>Login</Link>
        </div>
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