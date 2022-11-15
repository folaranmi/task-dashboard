import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function MainLayout({ children }) {
    return (
        <div className='cover'>
            <Sidebar />
            <div className='main'>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default MainLayout