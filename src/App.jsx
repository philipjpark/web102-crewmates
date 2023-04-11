import './App.css';
import React, {useState, useEffect} from "react";
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
// import { Link } from 'react-router-dom'
import { supabase } from './client'
import SideNav from "./components/sideNav";



const App = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {
      const {data} = await supabase
      .from("Posts")
      .select()
      .order("created_at", { ascending: true })

      setPosts(data);
    }

    fetchPosts();
  }, []);
  

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ]);

  return ( 

    <div className="App">
      <div className="whole-page">
        <SideNav /> 

      <div className="header">
        <h1>Crewmate Creator</h1>
      </div>
        {element}
    </div>

    </div>

  );
}

export default App;
