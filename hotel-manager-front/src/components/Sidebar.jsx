import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar' style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#930001">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/menuprincipal" className="text-decoration-none" style={{ color: 'inherit' }}>
            Hotel Berlín
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link to="/reservas">
              <CDBSidebarMenuItem icon='plus-circle'> Reservas</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/pago">
              <CDBSidebarMenuItem icon="comments-dollar">Pago</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/inventario">
              <CDBSidebarMenuItem icon="warehouse">Inventario</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/reportes">
              <CDBSidebarMenuItem icon="chart-line">Reportes</CDBSidebarMenuItem>
            </Link>

            <Link to='/usuarios'>
              <CDBSidebarMenuItem icon="user-alt">Usuarios</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/*<CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
          </CDBSidebarFooter>*/}
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;


