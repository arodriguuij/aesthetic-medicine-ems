import TreatmentContent from "@/app/components/TreatmentContent";
import { PageProps } from "@/app/types/global.types";
import { getTreatmentById } from "@/app/src/controllers/treatments";

const Treatment = async ({ params }: PageProps) => {
  const treatments = await getTreatmentById(+params.id);

  return <TreatmentContent data={treatments} />;
};

export default Treatment;
