import React from 'react'
import './logo.css'
import logo from '../../assets/Group.svg'
import mask from '../../assets/MaskGroup.svg'

import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img className="ico" src={logo} alt="logo" />
            <img src={mask} alt="logo" />
        </Link>
    </aside>