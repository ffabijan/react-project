import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Blog.css';
import posts from '../components/zadaci/data/blog.json';
import Loader from "../components/Loader";
import ReactPaginate from 'react-paginate';
import ScrollToTop from '../components/ScrollToTop';

console.log(posts);

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Sudionici = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState([]); 

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);


// Dohvaćene kategorije i autori
  useEffect(() => {
    
    fetch(`${BASE_URL}/v2/sudionici`)
      .then((response) => response.json())
      .then((data) => { 
         setCategories(data);
        console.log(data);

      });
    fetch(`${BASE_URL}/v2/users?per_page=20`)
      .then((response) => response.json())
      .then((data) => {
        setAuthors(data);
        console.log(data);    
      });
 }, []);

 // Sve kategorije i autori dohvaćeni
  useEffect(() => {
    setLoading(true);

    const per_page = 6

    let url = `https://front2.edukacija.online/backend/wp-json/wp/v2/sudionici?_embed&per_page=6&page=${per_page}&page=${currentPage + 1}`;
    
    if(selectedCategory) url += "&categories=" + selectedCategory;
    if(selectedAuthor) url += "&author=" + selectedAuthor;


   fetch(url)
      .then((response) => {
        const totalPages = response.headers.get("X-WP-TotalPages");
        setPageCount(Number(totalPages))
        return response.json()
      })
      .then((data) => {
        setPosts(data);
      })
      .finally(() => setLoading(false));
  }, [selectedCategory, selectedAuthor, currentPage]);

    console.log(pageCount); 

    return (
    
      <>
      {loading && <Loader />}
      <div className="blog-page">
        <div className="container">
          <h1 className='text-center'>Sudionici</h1>
          <div className="row">
            <div className="row mb-4">
            <div className="col-12">
              {
                categories.map((category) => (
                  <button className='btn btn-dark text-light btn-rounded-4'
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}>
                      {category.name}
                  </button>
                ))}
                </div>
              </div>

              <select className="form-select mb-4" onChange={(e) => setSelectedAuthor(e.target.value)} >
                <option value="">Odaberi autora</option>
                {authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                    </option>
                ))}
              </select>

              </div>

             <div className="row">
            {posts.map((post) => {
              const image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes
                  ?.full?.source_url;

              return (
                <div key={post.id} className="col-md-4 mb-4 blog-post">
                  {image && (
                    <Link to={'/sudionici/' + post.slug}>
                    <img
                      src={image}
                      className="mb-3"
                      alt={post.title.rendered}
                    />
                    </Link>
                  )}
                  
                  <Link to={'/blog/' + post.slug}>
                  <h2>{post.title.rendered}</h2>
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />

                  <p>
                    {post._embedded?.author?.[0]?.name} |{" "}
                    {new Date(post.date).toLocaleDateString("hr-HR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              );
            })}
        </div>
        <ReactPaginate
           previousLabel={"next"}
            nextLabel={"→prev"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={(event) => {
              setCurrentPage(event.selected)
              setPosts([])
              ScrollToTop()
                     }}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"} 
        />
        </div>
      </div>
    </>
  );
};

export default Sudionici;