
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from 'axios';
import { useEffect,useState } from "react";
import "./homepage.css";
import { useLocation } from "react-router-dom";

export default function Homepage() {
  const [posts, setPosts] = useState([]);
const search = useLocation().search; 
// console.log(search);
useEffect(() => {
  const fetchPosts = async () => {
    const apiUrl = "https://mern-stack-blog-5oqp.vercel.app/api/posts" + search;
    try {
      const res = await axios.get(apiUrl);
      console.log(res.data);
      setPosts(res.data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchPosts();
}, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>   
        <Sidebar />
      </div>
    </>
  );
}
