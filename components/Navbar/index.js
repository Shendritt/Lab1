import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/doctor' activeStyle>
            Doctors
          </NavLink>
          <NavLink to='/Nurse' activeStyle>
            Nurse
          </NavLink>
          <NavLink to='/Tstaff' activeStyle>
          Technical staff
          </NavLink>
          <NavLink to='/Astaff' activeStyle>
            Administrativ staff
          </NavLink>
          <NavLink to='/pharmacist' activeStyle>
          Pharmacist
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;