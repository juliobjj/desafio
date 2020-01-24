import React from 'react';
import logo from '../assets/AdminLTELogo.png';
import user from '../assets/user2-160x160.jpg'

import Utils from '../utils/utils';

function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">

      <a href="../../index3.html" className="brand-link">
        <img src={logo} alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </a>

      <div className="sidebar">

        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={user} className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">{Utils.getUser()}</a>
          </div>
        </div>


      </div>
    </aside>

  );
}
export default Sidebar;

