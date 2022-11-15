import React from 'react';
import SearchIcon from '../../assets/img/icons/search-icon.svg';
import NotificationIcon from '../../assets/img/icons/bell-icon.svg';
import DownArrowIcon from '../../assets/img/icons/down-arrow.svg';
import ProfileImage from '../../assets/img/icons/profile-icon.svg';

function Header() {
    return (
        <header className='header'>
            <div></div>

            <form action="" className='formbox' >
                <input type="text" className='search' placeholder='Search anything...' />
                <img src={SearchIcon} alt="Search Icon" className='icon'/>
            </form>

            <div className='user-corner'>
                <div className="notification">
                    <img src={NotificationIcon} alt=" notification bell" />
                    <div className="counter">2</div>
                </div>

                <div className="profile">
                    <div className="profile__image">
                        <img src={ProfileImage} alt="" />
                    </div>
                    <img src={DownArrowIcon} alt="down arrow" />
                </div>
            </div>
        </header>
    )
}

export default Header