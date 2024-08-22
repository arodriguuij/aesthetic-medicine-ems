import TreatmentContent from "@/app/components/TreatmentContent";
import { getTreatmentById } from "@/app/src/controllers/treatments";
import { PageProps } from "@/app/types/global.types";

const Treatment = async ({ params }: PageProps) => {
  const treatments = await getTreatmentById(+params.id);

  return <TreatmentContent data={treatments} />;
};

export default Treatment;
