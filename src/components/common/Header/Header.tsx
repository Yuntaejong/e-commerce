import React from 'react';

// import { logout } from '../../store/slices/authSlice';

import styles from './Header.module.css'

import Navigation from '../Navigation'

const Header = () => {
    return (
        <div className={styles.header}>
            <Navigation/>
        </div>
    )
}

export default Header;