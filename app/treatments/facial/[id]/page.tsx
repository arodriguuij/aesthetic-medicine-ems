import TreatmentContent from "@/app/components/TreatmentContent";
import facialFetch from "./facialFetch";

interface TreatmentsProps {
  params: {
    id: string;
  };
}

const Treatment = async ({ params }: TreatmentsProps) => {
  const { treatments: data } = await facialFetch(params.id);

  return <TreatmentContent data={data} />;
};

export default Treatment;
