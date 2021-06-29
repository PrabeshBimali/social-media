import React from 'react'
import "./leftBar.css"
import {RssFeed, People, WorkOutline, HelpOutline, Event, Bookmark, Chat, Group} from "@material-ui/icons"
import Friend from '../friend/Friend'
import {Users} from '../../dummyData'

export default function LeftBar() {
    return (
        <div className="leftBar">
            <div className="leftBarWrapper">
                <ul className="leftBarList">
                    <li className="leftBarListItem">
                        <People className="leftBarIcon"/>
                        <span className="leftBarIconText">People</span>
                    </li>
                    <li className="leftBarListItem">
                        <Chat className="leftBarIcon"/>
                        <span className="leftBarIconText">Chats</span>
                    </li>
                    <li className="leftBarListItem">
                        <RssFeed className="leftBarIcon"/>
                        <span className="leftBarIconText">Feed</span>
                    </li>
                    <li className="leftBarListItem">
                        <Group className="leftBarIcon"/>
                        <span className="leftBarIconText">Groups</span>
                    </li>
                    <li className="leftBarListItem">
                        <WorkOutline className="leftBarIcon"/>
                        <span className="leftBarIconText">Jobs</span>
                    </li>
                    <li className="leftBarListItem">
                        <HelpOutline className="leftBarIcon"/>
                        <span className="leftBarIconText">Questions</span>
                    </li>
                    <li className="leftBarListItem">
                        <Event className="leftBarIcon"/>
                        <span className="leftBarIconText">Events</span>
                    </li>
                    <li className="leftBarListItem">
                        <Bookmark className="leftBarIcon"/>
                        <span className="leftBarIconText">Bookmark</span>
                    </li>
                </ul>
                <button className="leftBarButton">show more</button>
                <hr className="leftBarHr"/>
                <ul className="leftBarFriendList">
                    {Users.map(u=>(
                        <Friend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
