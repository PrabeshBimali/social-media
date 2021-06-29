import React from 'react'
import "./feed.css"
import Share from '../../components/share/Share.jsx'
import Post from '../../components/post/Post.jsx'
import {Posts} from '../../dummyData'


export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map(p=>(
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
}
