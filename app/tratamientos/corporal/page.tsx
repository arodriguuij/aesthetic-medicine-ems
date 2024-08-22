import TreatmentsContent from "@/app/components/TreatmentsContent";
import { subTitleCorporal, titleCorporal } from "../tratamientos.const";
import { getTreatmentsCorporal } from "@/app/src/controllers/treatments";

const Treatments = async () => {
  const treatments = await getTreatmentsCorporal();

  return (
    <TreatmentsContent
      title={titleCorporal}
      subTitle={subTitleCorporal}
      data={treatments}
    />
  );
};

export default Treatments;
