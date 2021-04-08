import React from 'react'
import { Link } from 'react-router-dom';
import './header.component.scss'
import { ReactComponent as Logo} from '../../asserts/crown.svg'
export const Header = () => {
    return (
        <div className='header'>
            <Link to="/" className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}
