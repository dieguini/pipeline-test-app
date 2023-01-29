import React from 'react'
import { Link, useLocation } from 'react-router-dom'; 
import '../../base.css';
import './styles/navbar.css'
import { SimpleButton } from '../buttons/Buttons';
import { useAuth } from '../authentication/AuthProvider';
import S3FileUpload from '../s3FileUpload/S3FileUpload';


const getNavigationOptions = (location) => (
    {
        '/': [
            {
                variant: 'outline',
                content: 'Sign in',
                path: '/login',
            },
            {
                content: 'Sign up',
                path: '/signup'
            }
        ],
        '/login': [
            {
                content: 'Sign up',
                path: '/signup'
            }
        ],
        '/signup': [
            {
                content: 'Sign in',
                path: '/login'
            }
        ]
    }[location.pathname] || []
)


const NavBar = (props) => {
    
    const { user } = props
    const { logout, isCurrentUserAdmin } = useAuth();
    const location = useLocation()


    return (
        <nav id='navbar__navigation' className="navigation">
            <div className='navbar__left-panel'>
                <Link id='navbar__brand' to={"/"}>
                    Megamind 
                </Link>
                {isCurrentUserAdmin() && <> | <S3FileUpload /></>}
            </div>
            <div className={ "navbar__right-panel"} >
                {getNavigationOptions(location).map((value, index) => (
                        <Link key={index} to={value.path}><SimpleButton variant={value.variant} >{ value.content }</SimpleButton></Link>
                ))}
                {user && <SimpleButton onClick={() => logout()}>Log out</SimpleButton>}
            </div>
        </nav>
    )
}

export default NavBar