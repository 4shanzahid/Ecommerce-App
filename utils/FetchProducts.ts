import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

 
  export const fetchProducts = async () => {
    const query = groq`*[_type == "product"]{
      _id,
      name,
      details,
      image,
      price,
      "slug":slug.current,
    }`;

    const products = await client.fetch(query);
    return products;
  };

  export const fetchProduct = async (slug:string) => {
    const query = groq`*[_type == "product" && slug.current=='${slug}'][0]{
      _id,
      name,
      details,
      image,
      price,
      "slug":slug.current,
    }`;
    const product = await client.fetch(query);
    return product;
  };