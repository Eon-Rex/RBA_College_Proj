import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/layout/Header.css';

const NavList = ({ onClick }: { onClick?: () => void }) => {
  return (
    <ul className="nav-list">
      <li>
        <NavLink
          to="/"
          onClick={onClick}
          className={({ isActive }) => (isActive ? 'active-tab' : '')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          onClick={onClick}
          className={({ isActive }) => (isActive ? 'active-tab' : '')}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses/bsc"
          onClick={onClick}
          className={({ isActive }) => (isActive ? 'active-tab' : '')}
        >
          BSc
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses/msc"
          onClick={onClick}
          className={({ isActive }) => (isActive ? 'active-tab' : '')}
        >
          MSc
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses/bcom"
          onClick={onClick}
          className={({ isActive }) => (isActive ? 'active-tab' : '')}
        >
          BCom
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses/mcom"
          onClick={onClick}
          className={({ isActive }) => (isActive ? 'active-tab' : '')}
        >
          MCom
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          onClick={onClick}
          className={({ isActive }) => (isActive ? 'active-tab' : '')}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="college-name">RBA College</h1>
        <button className="menu-toggle" onClick={toggleSidebar} aria-label="Toggle Menu">
          ☰
        </button>
      </div>
      <nav className="nav-bar">
        <NavList />
      </nav>
      {isSidebarOpen && <div className="sidebar-overlay open" onClick={closeSidebar}></div>}
      <motion.nav
        className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
        ref={sidebarRef}
        initial={{ x: '100%' }}
        animate={{ x: isSidebarOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 500, damping: 10000 }}
      >
        <NavList onClick={closeSidebar} />
      </motion.nav>
    </header>
  );
};

export default Header;