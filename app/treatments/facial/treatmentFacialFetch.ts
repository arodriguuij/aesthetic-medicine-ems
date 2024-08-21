import { publicUrl } from "@/utils/utilsServer";
import { Treatment } from "../../types/treatments.types";

const treatmentsFacialFetch = async () => {
  const treatments: Treatment[] = await fetch(
    publicUrl + "api/treatments/facial"
  ).then((res) => res.json());

  return { treatments };
};

export default treatmentsFacialFetch;
