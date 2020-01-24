import React from 'react';
import Utils from '../utils/utils';
import { Link } from 'react-router-dom';

export default function ContentHeader() {

    return (
        <>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" data-widget="pushmenu" to="#"><i className="fas fa-bars"></i></Link>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" onClick={e => Utils.Logout(e)} data-widget="control-sidebar" data-slide="true" to="#">
                        <i class="fas fa-power-off"></i>
                    </Link>
                </li>
            </ul>
        </>
    );
}