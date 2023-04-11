import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import spaceship from './spaceship.png'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
    }, [props]);
    
    return (
        <div className="ReadPosts">
            <img src={spaceship} alt="spaceship" className="spaceship" style={{width: '500px', height: 'auto'}}></img>
            <br></br>
            <h2>Your Crewmate Gallery!</h2>

            <div className="ReadPostsCard">
                {
                    posts && posts.length > 0 ?
                    posts.map((post,index) => 
                    <Card id={post.id} name={post.name} speed={post.speed} color={post.color}/>
                    ) : <h2>{'No Challenges Yet 😞'}</h2>
                }
            </div>
        </div>  
    )
}

export default ReadPosts;