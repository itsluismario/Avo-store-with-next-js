import React from 'react'
import Navbar from 'components/Navbar/Navbar' 

const Layout: React.FC = ({ children }) => {
  return (

    <div>
        <Navbar/>
        { children }
        <footer>This is a footer</footer>
    </div>
  )
}

export default Layout