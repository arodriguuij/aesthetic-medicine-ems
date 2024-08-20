import { Product } from "../types/products.types";
import { Branch } from "../types/branches.types";
import { publicUrl } from "@/utils/utilsServer";

console.log({ publicUrl });
const productsFetch = async () => {
  const products: Product[] = await fetch(publicUrl + "api/products").then(
    (res) => res.json()
  );

  const branches: Branch[] = await fetch(publicUrl + "api/branches").then(
    (res) => res.json()
  );

  return { products, branches };
};

export default productsFetch;
