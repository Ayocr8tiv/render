import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Navigation from './Navigation'
import SideBar from './SideBar'
import { Home } from 'lucide-react'

const MainLayout = () => {
    return (
        <>
            <div className='flex flex-col '>
                <Navbar />

                <div className=' flex flex-grow'>
                    <SideBar />


                    <div className='flex-grow p-6 '>
                        <Navigation />
                        <Outlet />

                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout
