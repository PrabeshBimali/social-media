import React from 'react'
import './friend.css'

export default function Friend({user}) {
    return (
        <li className="leftBarFriend">
            <img src={user.profilePicture} alt="" className="leftBarFriendImg" />
            <span className="leftBarFriendName">{user.username}</span>
        </li>
    )
}
