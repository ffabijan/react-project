import {useState,useEffect} from 'react';
import './Blog.css';
import post from '../components/zadaci/data/blogsingle.json';    




const BlogSingle = () => {
      const [post, setPost] = useState(null);
;
    
      useEffect(
        () => {
          fetch(`https://front2.edukacija.online/backend/wp-json/wp/v2/posts/680_embed`)
          .then(response => response.json())
          .then(
            data => {
              setPost(data);
              console.log(data);
            }
          ) 
      }, []
      
    )

 if(!post)  return <p>Učitavanje...</p>
return (
    <>

      <div className="blog-page">
        <div className="container">
          <h1>Blog</h1>
          <div className="row">
            {post.map((post) => {
              const image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes
                  ?.full?.source_url;
              return (
                <div key={post.id} className="col-md-4 mb-4 blog-post">
                  {image && (
                   
                <img
                      src={image}
                      className="mb-3"
                      alt={post.title.rendered}
                    />
                   
                  )}
                  
                    <h2>{post.title.rendered}</h2>
                  
                  <div
                    dangerouslySetInnerHTML={{__html: post.excerpt.rendered }}
                  />
                  <p>
                    {post._embedded?.author?.[0]?.name}|{" "}
                    {new Date(post.date).toLocaleDateString("hr-HR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingle;