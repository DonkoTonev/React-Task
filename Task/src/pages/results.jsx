import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Results.css";
import result_page_img from "../assets/result_page_img.jpg";
import { Link } from "react-router-dom";
import ProductSlider from "./components/product-slider";

const Results = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://jeval.com.au/collections/hair-care/products.json?page=1"
        );
        console.log("Fetched products:", response.data.products);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    console.log("Stored wishlist:", storedWishlist);
    setWishlist(storedWishlist);
    fetchProducts();
  }, []);

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("answers")) || {};
    console.log("Stored answers:", storedAnswers);

    if (Object.keys(storedAnswers).length > 0) {
      const filtered = products.filter((product) => {
        return Object.values(storedAnswers).some((answer) => {
          const titleMatch =
            product.title &&
            product.title.toLowerCase().includes(answer.toLowerCase());
          const bodyMatch =
            product.body_html &&
            product.body_html.toLowerCase().includes(answer.toLowerCase());
          const tagsMatch =
            product.tags &&
            product.tags.some((tag) =>
              tag.toLowerCase().includes(answer.toLowerCase())
            );
          return titleMatch || bodyMatch || tagsMatch;
        });
      });
      console.log("Filtered products:", filtered);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleWishlistToggle = (product) => {
    let updatedWishlist = [];
    if (wishlist.find((item) => item.id === product.id)) {
      updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      updatedWishlist = [...wishlist, product];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      <div className="res_home_container">
        <div className="res_image_container">
          <img
            src={result_page_img}
            className="res_top_image"
            alt="Descriptive Alt Text"
          />
          <div className="res_centered_div">
            <div className="res_title_container">
              Build you everyday self care routine.
              <div className="res_text_container">
                Perfect for if you're looking for soft, nourished skin, our
                moisturizing body washes are made with skin-natural nutrients
                that work with your skin to replenish moisture. With a light
                formula, the bubbly lather leaves your skin feeling cleansed and
                cared for. And by choosing relaxing fragrances you can add a
                moment of calm to the end of your day.
              </div>
            </div>
            <button className="retart_button">
              <Link to="/">
                <span className="res_button_text">Retake the quiz</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <ProductSlider products={filteredProducts} />
    </div>
  );
};

export default Results;
