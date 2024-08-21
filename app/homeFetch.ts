import { publicUrl } from "@/utils/utilsServer";
import { Product } from "./types/products.types";
import { BranchHome } from "./types/branchesHome.types";

const homeFetch = async () => {
  const products: Product[] = await fetch(publicUrl + "api/products").then(
    (res) => res.json()
  );

  const branches: BranchHome[] = await fetch(
    publicUrl + "api/branchesHome"
  ).then((res) => res.json());

  return { products, branches };
};

export default homeFetch;
