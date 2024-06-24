import '../../styles/ProductSlider.css';
import product1 from '../../assets/product1.jpg';

function ProductSlider() {

  return (
    <div className='outer_container'>

        <div className='info_slide'>
            <div className='info_container'>
                <h3 className='title'>Daily routine</h3>
                <p className='text'>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
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
  );
}

export default ProductSlider;
