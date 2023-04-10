import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from "../client";

const EditPost = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, name: "", speed: "", color: ""});

    useEffect(() => {
        const result = data.filter(item => String(item.id) === id)[0];
        setPost({title: result.title, author: result.author, description: result.description});
    }, [data, id]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        });
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
            <form>
                <label htmlfor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange}/><br />
                <br/>

                <label htmlfor="speed">Speed</label><br />
                <input type="text" id="speed" name="speed" value={post.speed} onChange={handleChange}/><br />
                <br/>

                <label htmlfor="colors">Color</label><br />
                <input type="text" id="color" name="color" onChange={handleChange}/><br />
                <br/>

                {/* <input type="submit" value="Submit" /> */}
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost