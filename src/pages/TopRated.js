import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../Context/ProductProvider";

const TopRated = () => {
  const { state: { products, error, loading } } = useProducts();
  let content;

  if (loading) {
    content = <p>Loading..</p>
  }

  if (error) {
    content = <p>Something went wrong!</p>
  }

  if (!loading && !error && products.length === 0) {
    content = <p>Sorry, All products are already sale.</p>
  }

  if (!loading && !error && products.length) {
    content = products.filter(product => product.rating >= 5).map(product => <ProductCard product={product} />);
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default TopRated;
