import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./shop.css"; 



const Shop = () => {
  const [products, setProducts] = useState(null);


  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Ne mogu povući podatke");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchPage();
  }, []);

  const addToCart = (product) => {
  console.log("Dodano u košaricu:", product);

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    existingProduct.quantity =
      (existingProduct.quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

  if (!products) return <p>Učitavanje...</p>;

  return (
    <div className="container">  
    <h1>Shop</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="cart col-md-4 mb-5">
            <img src={product.thumbnail} alt={product.title} className="card-img-top" />
            <h3 key= {product.id}>{product.title}</h3>
            <button
              className="btn buton-right"
              onClick={() => addToCart(product)}>
              {product.price} EUR
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;