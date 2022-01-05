import * as React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import classes from './Layout.module.scss';

const Layout: React.FC = () => {
    return (
        <div className={classes.layoutContainer}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
