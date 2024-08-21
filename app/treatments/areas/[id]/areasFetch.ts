import { publicUrl } from "@/utils/utilsServer";
import { Treatment } from "@/app/types/treatments.types";

const areasFetch = async (id: string) => {
  const {
    treatments,
    areaName,
    description,
  }: { treatments: Treatment[]; areaName: string; description: string } =
    await fetch(publicUrl + "api/areas/" + id).then((res) => res.json());

  return {
    treatments,
    areaName,
    description,
  };
};

export default areasFetch;
