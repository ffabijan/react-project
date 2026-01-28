import {useState,useEffect} from 'react';
import './Blog.css';
import posts from '../components/zadaci/data/blog.json';

console.log(posts);

const Sudionici = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(
    () => {
      fetch(`https://front2.edukacija.online/backend/wp-json/wp/v2/sudionici?_embed`)
      .then(response => response.json())
      .then(
        data => {
          setPosts(data);
        }
      ) 
  }, []
  
)


  return (
  <div className="blog-page">
    <div className="container">
    <h1>Sudionici</h1>
    <div className='row'>
    {posts.map((post) => (
        <div className="col-md-4 md-4 blog post">
          <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} className="mb-3" alt={post.title.rendered} />
            <h2>{post.title.rendered}</h2>

            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
            {
              console.log(post.excerpt.rendered)
            }
            <p>{post._embedded.author[0].name} | {new Date(post.date).toLocaleString("hr-HR", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', })}</p>
          </div>
          )) }
      </div>
    </div>
    </div>
  )
}

export default Sudionici;
