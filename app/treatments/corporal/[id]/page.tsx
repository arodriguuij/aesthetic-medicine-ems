import TreatmentContent from "@/app/components/TreatmentContent";
import corporalFetch from "./corporalFetch";

interface TreatmentsProps {
  params: {
    id: string;
  };
}

const Treatment = async ({ params }: TreatmentsProps) => {
  const { treatments: data } = await corporalFetch(params.id);

  return <TreatmentContent data={data} />;
};

export default Treatment;
