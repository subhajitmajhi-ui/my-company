import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CustomIndicator from './CustomIndicator';

const ProductDetail = ({ product }) => {
  return (
    product && <div className="w-full mx-auto p-4">
      <div className="hidden md:block">
        {product.images.map((image, index) => (
            <div key={index} className=' pb-4'>
                <img src={image} alt={`Product ${index + 1}`} width={'100%'} />
            </div>
        ))}
      </div>
      
      <div className="md:hidden">
        <Carousel 
        showArrows={true} 
        showThumbs={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => (
            <CustomIndicator
              onClickHandler={onClickHandler}
              active={isSelected}
              index={index}
              label={label}
            />
          )}
        >
          {product.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductDetail;
