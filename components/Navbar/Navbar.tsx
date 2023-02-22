import React, { Component } from 'react'
import { Input, Menu, Container } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
          <Menu.Item
            name='🥑 Avo Store'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            href={`/`}
          />        
        <Menu.Menu position='right'>
        <Menu.Item
            name='🛒 Cart'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
        <style jsx global>{`
        .ui.secondary.menu {
          font-size: 1.1rem;
          padding-top: 15px;
        }
      `}</style>
      </Menu>
    )
  }
}
