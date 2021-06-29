import React from 'react'
import './home.css'
import Feed from '../../components/feed/Feed.jsx'
import LeftBar from '../../components/leftbar/LeftBar.jsx'
import RightBar from '../../components/rightbar/RightBar.jsx'
import Topbar from '../../components/topbar/Topbar.jsx'

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <LeftBar />
                <Feed />
                <RightBar />
            </div>
        </>
    )
}
