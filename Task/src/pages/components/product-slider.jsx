import '../../styles/ProductSlider.css';
import product1 from '../../assets/product1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ProductSlider() {

  return (
    <div>
        <div className='outer_container'>

            <div className='info_slide'>
                <div className='info_container'>
                    <div className='res_title'>Daily routine</div>
                    <div className='res_text'>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</div>
                </div>

            </div>

            <div className='product'>

                <div className='inner_container'>
                    <img src={product1} className="product_image" alt="Descriptive Alt Text" />
                    
                    <div className='title_price'>
                        <div className='title'>Milk Body Cleanser</div>
                        <div className='price'>$14.00</div>
                    </div>
                </div>
            </div>

            <div className='product'>

                <div className='inner_container'>
                    <img src={product1} className="product_image" alt="Descriptive Alt Text" />
                    
                    <div className='title_price'>
                        <div className='title'>Milk Body Cleanser</div>
                        <div className='price'>$14.00</div>
                    </div>
                </div>
            </div>

        </div>
        <div className='next_icon'>
            <svg className='frame'>
                <FontAwesomeIcon className='the_icon' icon={faChevronRight} />
            </svg>

        </div>

        <div className='ellipse_container'>
            <div className='ellipse'></div>
            <div className='ellipse'></div>
            <div className='ellipse'></div>
        </div>
    </div>

  );
}

export default ProductSlider;
