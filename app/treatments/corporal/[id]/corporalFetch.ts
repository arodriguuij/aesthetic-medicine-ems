import { publicUrl } from "@/utils/utilsServer";
import { Treatment } from "@/app/types/treatments.types";

const corporalFetch = async (id: string) => {
  const treatments: Treatment[] = await fetch(
    publicUrl + "api/treatments/" + id
  ).then((res) => res.json());

  return {
    treatments,
  };
};

export default corporalFetch;
