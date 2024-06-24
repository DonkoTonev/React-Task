import "../../styles/ProductSlider.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const slidesPerPage = 2;

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleNext = () => {
    if (currentIndex < Math.ceil(products.length / slidesPerPage) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleWishlistToggle = (productId) => {
    let updatedWishlist;
    if (wishlist.includes(productId)) {
      updatedWishlist = wishlist.filter((id) => id !== productId);
    } else {
      updatedWishlist = [...wishlist, productId];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const getSlidesToShow = () => {
    const start = currentIndex * slidesPerPage;
    const end = start + slidesPerPage;
    return sortedProducts.slice(start, end);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (wishlist.includes(a.id) && !wishlist.includes(b.id)) {
      return -1;
    }
    if (!wishlist.includes(a.id) && wishlist.includes(b.id)) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <div className="outer_container">
        <div className="info_slide">
          <div className="info_container">
            <div className="res_title">Daily routine</div>
            <div className="res_text">
              Perfect for if you're looking for soft, nourished skin, our
              moisturizing body washes are made with skin-natural nutrients that
              work with your skin to replenish moisture. With a light formula,
              the bubbly lather leaves your skin feeling cleansed and cared for.
              And by choosing relaxing fragrances you can add a moment of calm
              to the end of your day.
            </div>
          </div>
        </div>

        {getSlidesToShow().map((product) => (
          <div key={product.id} className="product">
            <div className="inner_container">
              <div className="image_component">
                <div className="icon_heart">
                  <button
                    className="heart_button"
                    onClick={() => handleWishlistToggle(product.id)}
                  >
                    <FontAwesomeIcon
                      className={`heart_icon ${
                        wishlist.includes(product.id) ? "active" : ""
                      }`}
                      icon={faHeart}
                    />
                  </button>
                </div>
                <img
                  src={product.images[0]?.src}
                  className="product_image"
                  alt={product.title}
                />
              </div>
              <div className="title_price">
                <div className="title">{product.title}</div>
                <div className="price">${product.variants[0].price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {products.length > slidesPerPage && (
          <>
            <div className="next_icon" onClick={handleNext}>
              <svg className="frame">
                <FontAwesomeIcon className="the_icon" icon={faChevronRight} />
              </svg>
            </div>
            {currentIndex > 0 && (
              <div className="prev_icon" onClick={handlePrev}>
                <svg className="frame">
                  <FontAwesomeIcon className="the_icon" icon={faChevronLeft} />
                </svg>
              </div>
            )}
          </>
        )}
      </div>

      <div className="ellipse_container">
        {Array.from({ length: Math.ceil(products.length / slidesPerPage) }).map(
          (_, index) => (
            <div
              key={index}
              className={`ellipse ${index === currentIndex ? "active" : ""}`}
            ></div>
          )
        )}
      </div>
    </div>
  );
};

export default ProductSlider;
