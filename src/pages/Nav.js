import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.jpg';
import Cart from '../assets/cart.svg';
import { SearchOutlined } from '@material-ui/icons';
import Header from '../components/Header';
import Text from '../components/HeaderBottom';

function Nav() {

    return (
        <div className='nav'>
            <div>
                <Header />
                <div className="navigation">
                    <div className='nav_header'>
                        <NavLink to='/'>
                            <img
                                className='nav_logoImg'
                                src={Logo}
                                alt=''
                            />
                        </NavLink>
                        <div className="sidebar_search">
                            <div className="sidebar_searchContainer">
                                <select className="select">
                                    <option>Semua Kategori</option>
                                </select>
                                <SearchOutlined />
                                <input placeholder="Kamu Lagi Cari Apa?" type="text" />
                            </div>
                        </div>
                        <NavLink to='/'>
                            <img
                                className='cart'
                                src={Cart}
                                alt=''
                            />
                        </NavLink>
                        <div className="header_button">
                            <a href="#!" class="btn btn-primary" className="button1">Masuk</a>
                            <a href="#!" class="btn btn-primary" className="button1">Daftar</a>
                            {/* <Button text="Masuk" className="button1" />
                            <Button text="Daftar" className="button1" /> */}
                        </div>
                    </div>
                    <Text />
                </div>
            </div>
        </div>
    )
}

export default Nav;
