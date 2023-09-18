import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../component/NavBar';
import DynamicTabs from '../component/DynamicTabs';
import ProductImage from '../component/ProductImage';
import AddToCartBox from '../component/AddToCartBox'
import axios from 'axios';
import { Circles } from 'react-loader-spinner'


function SingleProduct() {
  const { productId } = useParams();
  const [productData, setProductData] = useState({})
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setProductData(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  if(loading){
    return <div class="flex justify-center items-center h-screen">
      <Circles
    height="80"
    width="80"
    color="#000000"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
    </div>
  }


  return (
    productData.images && <div className="min-h-screen flex flex-col">
      <main className="mx-auto sm:px-2 md:px-4">
        <NavBar />
        <div className="grid grid-cols-12">
          <div className="col-span-3 p-2 hidden md:block">
            <div className="sticky top-20">
              <DynamicTabs />
              <p>See the <Link to={'/'} className=' underline font-bold'>EDITOR’S NOTE</Link></p>
              <p>Learn about the <Link to={'/'} className=' underline font-bold'>DESIGNER</Link></p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 relative top-20  p-2">
            <ProductImage product={productData} />
          </div>
          <div className="col-span-12 md:col-span-3 p-2">
            <div className="md:sticky md:top-20 mt-16 md:mt-0 px-4 md:px-0">
            <AddToCartBox product={productData} />
            </div>
          </div>
        </div>
        <div className="relative top-20 p-2 mb-24 text-center h-[500px] max-w-3xl mx-auto">
          <h2 className='text-l uppercase'>about the designer</h2>
          <h2 className=' text-5xl uppercase py-7'>jonathan simkhai</h2>
          <p>Volutpat mi pretium ipsum tortor vitae. Semper faucibus pellentesque egestas turpis semper. Et, placerat hac vitae nulla. Gravida non elementum enim tincidunt consequat viverra nunc sociis sed. Duis elementum penatibus vitae magna sed sed pharetra. Amet ultrices diam cursus amet morbi, amet ultrices diam cursus amet morbi egestas augue egestas. </p>
        </div>
      </main>
    </div>
  );
}

export default SingleProduct;
