"use client"
import Product from "@/components/Product";
import { fetchProductbyCategory , fetchAllproducts} from "@/utils/FetchProducts";
import { useState , useEffect} from "react";

const ProductCategory =  ({ params }: { params: { name: string } }) => {
  const [products, setProducts] = useState([]);
  const name: string = params.name;

  useEffect(() => {
    const fetchProducts = async () => {
      if (name === 'all') {
        // Fetch all products
        const allProducts = await fetchAllproducts(); // Implement this function to fetch all products
        setProducts(allProducts);
      } else {
        const products = await fetchProductbyCategory(name);
        setProducts(products);
      }
    };

    if (name) {
      fetchProducts();
    }
  }, [name]);

  return (
    <>
      <div className="products-container">
        {products && products.length > 0 ? (
          products.map((product: any) => (
            <Product
              key={product._id}
              image={product.image}
              name={product.name}
              slug={product.slug}
              price={product.price}
            />
          ))
          ) : (
            <p>No products in this category.</p>
          )}
      </div>
    </>
  );
};

export default ProductCategory;
