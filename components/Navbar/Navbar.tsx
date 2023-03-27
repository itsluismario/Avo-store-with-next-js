

import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'

import { useCart } from '@store/Cart'

const Navbar = () => {
  const { pathname } = useRouter()
  const { count: cartCount } = useCart()


  
  return (
    <Menu size="huge"   secondary >
      <Container text>
        <Link href="/" >
          <Menu.Item
            title="Inicio | Todos los productos"
          >
            Avo Store
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Link href="/cart" >
            <Menu.Item
            title="Carrito"
            >
              <p>Canasta ({cartCount})</p>
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          background-color: #104c34; 
          
        }
        .ui.menu .item {
          color: #FFFF;
          font-size: 17px;
        }
      `}</style>
    </Menu>
  )
}

export default Navbar