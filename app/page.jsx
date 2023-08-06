"use client";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Product from "@/components/Product";
import { fetchAllproducts } from "@/utils/FetchProducts";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchLatestProducts() {
      const fetchedProducts = await fetchAllproducts();
      setProducts(fetchedProducts.slice(0, 3)); // Only the first 4 products
    }

    fetchLatestProducts();
  }, []);

  return (
    <div>
      <Hero />
      <div className="products-heading">
        <h2>Latest Products </h2>
        <p>Check the Latest Fashion Trends</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product
            key={product._id}
            image={product.image} // Pass the image prop
            name={product.name} // Pass the name prop
            slug={product.slug} // Pass the slug prop
            price={product.price} // Pass the price prop
          />
        ))}
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
