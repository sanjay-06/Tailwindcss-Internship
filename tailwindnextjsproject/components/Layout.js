import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className="container">
        <main className="container">
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout