import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

 
  export const fetchAllproducts = async () => {
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
      category,
    }`;
    const product = await client.fetch(query);
    return product;
  };


  export const fetchProductbyCategory = async (name:string) => {
    const query = groq`*[_type == "product" && category->name=='${name}']{
      _id,
      name,
      details,
      image,
      price,
      "slug":slug.current,
      category,
    }`;
    const product = await client.fetch(query);
    return product;
  };

  