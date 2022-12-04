import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../Context/ProductProvider";

const Cart = () => {
  const { state: { cart, error, loading } } = useProducts();
  let content;

  if (loading) {
    content = <p>Loading..</p>
  }

  if (error) {
    content = <p>Something went wrong!</p>
  }

  if (!loading && !error && cart.length === 0) {
    content = <p>Sorry, Your cart is empty</p>
  }

  if (!loading && !error && cart.length) {
    content = cart.map(product => <ProductCard key={product._id} product={product} />);
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Cart;
