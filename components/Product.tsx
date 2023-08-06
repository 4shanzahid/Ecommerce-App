import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { CardContent } from "@/components/ui/card";

const Product = ({ image, name, slug, price }: any) => {
  return (
    <Link href={`/product/${slug}`}>
      <CardContent>
        <Image
          src={urlForImage(image && image[0]).url()}
          width={250}
          height={250}
          alt="product img"
        />
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
      </CardContent>
    </Link>
  );
};

export default Product;
