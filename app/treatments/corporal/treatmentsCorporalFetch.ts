import { publicUrl } from "@/utils/utilsServer";
import { Treatment } from "../../types/treatments.types";

const treatmentsCorporalFetch = async () => {
  const treatments: Treatment[] = await fetch(
    publicUrl + "api/treatments/corporal"
  ).then((res) => res.json());

  return { treatments };
};

export default treatmentsCorporalFetch;
