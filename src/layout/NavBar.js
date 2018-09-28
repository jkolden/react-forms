import React from 'react'
import { Menu } from 'semantic-ui-react'
import logo from '../logo.svg'
import { Link} from 'react-router-dom'
import './styles.css'

const NavBar = () => (

<Menu>
<Menu.Menu>
<Menu.Item>
My Full Feature List <img src={logo} alt="logo" className="NavBar-logo"/>
</Menu.Item>

</Menu.Menu>

<Menu.Menu position="right">
<Menu.Item as={Link} to='/signup'>
Sign Up
</Menu.Item>

<Menu.Item as={Link} to='/login' >
Log In
</Menu.Item>

</Menu.Menu>
</Menu>

)

export default NavBar