import React from 'react';
import {Link} from 'react-router-dom';

const Header: React.FC = () => (
    <header>
        <nav>
            <Link to="/">Home</Link> | <Link to="about">About</Link>
        </nav>
    </header>
);

export default Header;
