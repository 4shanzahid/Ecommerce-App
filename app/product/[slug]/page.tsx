import { fetchProduct } from "@/utils/FetchProducts";

const ProducDetails = async ({ params }: { params: { slug: string } }) => {
  const slug: string = params.slug;
  const product = await fetchProduct(slug);
  const { image, name, details, price } = product;

  return (
    <>
      {name} <br />
      {details} <br />
      {price} <br />
    </>
  );
};

export default ProducDetails;
