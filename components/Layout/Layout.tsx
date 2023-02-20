import React from 'react'
import Navbar from '@components/Navbar/Navbar' 
import { Container } from 'semantic-ui-react'

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (

    <div>
        <Navbar/>
        <Container as='main'>
          { children }
        </Container>
        <footer>This is a footer</footer>
    </div>
  )
}

export default Layout