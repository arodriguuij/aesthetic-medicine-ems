import { titleArea } from "../../treatments.const";
import TreatmentsContent from "@/app/components/TreatmentsContent";
import { getAreasById } from "@/app/src/controllers/areas";
import { PageProps } from "@/app/types/global.types";

const Treatments = async ({ params }: PageProps) => {
  const { treatments, areaName, description } = await getAreasById(+params.id);

  return (
    <TreatmentsContent
      title={`${titleArea} ${areaName} (${treatments.length})`}
      subTitle={description || ""}
      data={treatments}
    />
  );
};

export default Treatments;
