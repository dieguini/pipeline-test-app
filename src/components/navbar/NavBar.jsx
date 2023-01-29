import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBCollapse,
    MDBBtn,
} from 'mdb-react-ui-kit';
import './styles/navbar.css'
import S3FileUpload from '../s3FileUpload/S3FileUpload';

const headerNav = (user) => 
    !user ? (
        [
            {
                displayName: 'Chat',
                path: 'chat'
            },
            {
                displayName: 'SignIn',
                path: '/login'
            }
        ]
    ) : (
        [
            {
                displayName: 'Chat',
                path: 'chat'
            },
            {
                displayName: 'SignOut',
                path: '/login'
            }
        ]
    );

const NavBar = (props) => {
    const { user, logout } = props
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar className='NavBarFull' expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand className='Navbar-Brand' href='/'>Megamind</MDBNavbarBrand>
                <S3FileUpload />
                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse className='rightnavbar' navbar show={showBasic}>
                    {headerNav(user).map((value, index) => (
                        <MDBBtn key={index} className='button-navbar' color='primary'>                        
                            <Link 
                                to={value.path}
                                onClick={() => {
                                    setIsNavExpanded(!isNavExpanded);
                                    if (value.displayName === 'SignOut') return logout();
                                }}
                            >
                                {value.displayName}
                            </Link>                        
                        </MDBBtn>
                    ))} 
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default NavBar