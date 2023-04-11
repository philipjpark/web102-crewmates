import React, {useState} from 'react';
import './CreatePost.css';
import { supabase } from '../client'
import crewmates from './crewmates.png'

// console.log(supabase)

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
            <img src={crewmates} alt="crewmates" className="crewmates" style={{width: '500px', height: 'auto'}}></img>
            <br></br>

            <h2>Create a New Crewmate</h2>
            <form>
                <label htmlfor="name"><h3>Name</h3></label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange}/><br />
                <br/>

                <label htmlfor="speed"><h3>Speed</h3></label><br />
                <input type="text" id="speed" name="speed" value={post.speed} onChange={handleChange}/><br />
                <br/>

                <div className='color-container'>
                    <label htmlfo="color"><h3>Color:</h3></label><br />

                    <input type="radio" id="red" name="color" value="red" checked={post.color === 'red'} onChange={handleChange} />
                    <label htmlFor="red">red</label>

                    <input type="radio" id="green" name="color" value="green" checked={post.color === 'green'} onChange={handleChange} />
                    <label htmlFor="green">green</label>

                    <input type="radio" id="blue" name="color" value="blue" checked={post.color === 'blue'} onChange={handleChange} />
                    <label htmlFor="blue">blue</label>

                    <input type="radio" id="purple" name="color" value="purple" checked={post.color === 'purple'} onChange={handleChange}/>
                    <label htmlFor="purple">purple</label>

                    <input type="radio" id="yellow" name="color" value="yellow" checked={post.color === 'yellow'} onChange={handleChange}/>
                    <label htmlFor="yellow">yellow</label>

                    <input type="radio" id="orange" name="color" value="orange" checked={post.color === 'orange'} onChange={handleChange}/>
                    <label htmlFor="orange">orange</label>

                    <input type="radio" id="pink" name="color" value="pink" checked={post.color === 'pink'} onChange={handleChange}/>
                    <label htmlFor="pink">pink</label>
                </div>

                <input type="submit" value="Create" onClick={createPost}/>
            </form>
        </div>
    )
}

export default CreatePost