import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from "../client";

const EditPost = ({data}) => {
    const {id} = useParams();
    const [post, setPost] = useState({id: null, name: "", speed: "", color: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        });
    }

    useEffect(() => {
        const result = data.filter(item => String(item.id) === id)[0];
        setPost({name: result.name, speed: result.speed, color: result.color});
    }, [data, id]);

    const updatePost = async (event) => {
        event.preventDefault();
        const { error } = await supabase
        .from("Posts")
        .update({name: post.name, speed: post.speed, color: post.color})
        .eq("id", id);

        if (error) {
            console.log(error);
        }

        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();
        const { error } = await supabase
        .from("Posts")
        .delete()
        .eq("id", id);

        if (error) {
            console.log(error);
            return;
        }

        window.location = "/";
    }

    return (
        <div>
            <h2>Update Your Crewmate!</h2>
            <br></br>
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

                <input type="submit" value="Edit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost