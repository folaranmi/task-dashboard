import React from 'react'
import { NavLink } from 'react-router-dom';

import BellIcon from '../../assets/img/icons/todo-app-logo.svg';
import Dashboard from '../../assets/img/icons/todo-dashboard-icon.svg';
import TaskIcon from '../../assets/img/icons/todo-task-icon.svg';
import BookIcon from '../../assets/img/icons/todo-book-icon.svg';
import FolderIcon from '../../assets/img/icons/todo-folder-icon.svg';
import SendIcon from '../../assets/img/icons/todo-send-icon.svg';
import SettingsIcon from '../../assets/img/icons/todo-settings-icon.svg';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="logo">
                <img src={BellIcon} alt="" />
                <span>TO-DO</span>
            </div>

            <nav className="sidebar__nav">
                <ul className='sidebar__nav--list'>
                    <li ><NavLink to="/" className="nav-link"> <img src={Dashboard} alt="" /> </NavLink></li>
                    <li><NavLink to="/task" className="nav-link"> <img src={TaskIcon} alt="" /> </NavLink></li>
                    <li><NavLink to="/book" className="nav-link"> <img src={BookIcon} alt="" /> </NavLink></li>
                    <li><NavLink to="/settings" className="nav-link"> <img src={SettingsIcon} alt="" /> </NavLink></li>
                    <li><NavLink to="/send" className="nav-link"> <img src={SendIcon} alt="" /> </NavLink></li>
                    <li><NavLink to="/folder" className="nav-link"> <img src={FolderIcon} alt="" /> </NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar