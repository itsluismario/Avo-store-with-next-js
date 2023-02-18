import React from 'react'
import Navbar from '@components/Navbar/Navbar' 

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (

    <div>
        <Navbar/>
        { children }
        <footer>This is a footer</footer>
        
        <style jsx>{`
            div {
                background: salmon;
            }
        `}</style>

    </div>
  )
}

export default Layout