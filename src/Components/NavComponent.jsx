import React from 'react';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
} from "reactstrap"

class NavComponent extends React.Component {
    state = {  }
    render() {  
        
            
        return ( 
            
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand className="text-white" href="/">Strive Bookshop!</NavbarBrand>
        <NavbarToggler  />
        <Collapse  navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="text-white" href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="#">Browse</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
         );
    }
}
 
export default NavComponent;