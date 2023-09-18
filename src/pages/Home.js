import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductRequest } from "../redux-saga/actions";
import NavBar from "../component/NavBar";
import ProductCard from "../component/ProductCard";
import { Circles } from "react-loader-spinner";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchProductRequest());
  }, [dispatch]);

  if (loading) {
    return (
      <div class="flex justify-center items-center h-screen">
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
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    products && (
      <>
        <NavBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5  gap-4 p-5 relative top-20">
          {products.products &&
            products.products.map((d) => {
              return <ProductCard product={d} key={d.id} />;
            })}
        </div>
      </>
    )
  );
};

export default Home;
