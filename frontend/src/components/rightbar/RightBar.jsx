import React from 'react'
import "./rightBar.css"
import Online from '../online/Online'
import {Users} from '../../dummyData'

export default function RightBar() {
    return (
        <div className="rightBar">
            <div className="rightBarWrapper">
                <div className="birthdayContaier">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Prabesh Bimali</b> and <b>3 other people</b> have birthday today
                    </span>
                </div>
                <img src="assets/ad.png" alt="" className="rightBarAd" />
                <h4 className="rightBarTitle">Online Friends</h4>
                <ul className="rightBarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}
