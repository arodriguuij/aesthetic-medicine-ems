import { publicUrl } from "@/utils/utilsServer";
import { Area } from "@/app/types/areas.types";

const areasFetch = async () => {
  const areas: Area[] = await fetch(publicUrl + "api/areas").then((res) =>
    res.json()
  );

  return { areas };
};

export default areasFetch;
