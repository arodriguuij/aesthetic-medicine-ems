import { publicUrl } from "@/utils/utilsServer";
import { Treatment } from "../types/treatments.types";

const treatmentsFetch = async () => {
  const treatments: Treatment[] = await fetch(
    publicUrl + "api/treatments"
  ).then((res) => res.json());

  return { treatments };
};

export default treatmentsFetch;
