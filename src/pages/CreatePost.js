import React, {useState} from 'react';
import './CreatePost.css';
import { supabase } from '../client'

console.log(supabase)

const CreatePost = () => {
    const [post, setPost] = useState({name: "", speed: "", color: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {...prev, [name]: value}
        });
    }

    const createPost = async (event) => {
        event.preventDefault();
    
       const { error} = await supabase
        .from('Posts')
        .insert({name: post.name, speed: post.speed, color: post.color})
        .select();
    
        if (error) {
            console.log(error);
            return;
        }
        window.location = "/";
    }


    return (
        <div>
            <form>
                <label htmlfor="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange}/><br />
                <br/>

                <label htmlfor="speed">Speed</label><br />
                <input type="text" id="speed" name="speed" onChange={handleChange}/><br />
                <br/>

                <label htmlfor="colors">Color</label><br />
                <input type="text" id="color" name="color" onChange={handleChange}/><br />
                <br/>

                <input type="submit" value="Create" onClick={createPost}/>
            </form>
        </div>
    )
}

export default CreatePost