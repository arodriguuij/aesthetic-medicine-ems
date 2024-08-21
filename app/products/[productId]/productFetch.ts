import { Product } from "@/app/types/products.types";
import { publicUrl } from "@/utils/utilsServer";

const productFetch = async (id: string) => {
  const product: Product[] = await fetch(publicUrl + "api/products/" + id).then(
    (res) => res.json()
  );

  return { product };
};

export default productFetch;
