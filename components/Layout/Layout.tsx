import React from 'react';

import { Container } from 'semantic-ui-react';

import  HeaderOne  from '@components/Header/Header';
import Navbar from '@components/Navbar/Navbar';
import { Footer } from '@components/Footer/Footer';

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (

    <div>
        
        <Container as='main' text>
        <Navbar/>
          { children }
        </Container>
        <Footer/>
    </div>
  )
}

export default Layout