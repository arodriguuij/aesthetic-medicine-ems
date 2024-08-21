import { titleArea } from "../../treatments.const";
import TreatmentsContent from "@/app/components/TreatmentsContent";
import areasFetch from "./areasFetch";

interface TreatmentsProps {
  params: {
    id: string;
  };
}
const Treatments = async ({ params }: TreatmentsProps) => {
  const data = await areasFetch(params.id);

  return (
    <TreatmentsContent
      title={`${titleArea} ${data?.areaName} (${data?.treatments.length})`}
      subTitle={data?.description || ""}
      data={data?.treatments}
    />
  );
};

export default Treatments;
