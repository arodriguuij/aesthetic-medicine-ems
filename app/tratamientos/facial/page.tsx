import TreatmentsContent from "@/app/components/TreatmentsContent";
import { subTitleFacial, titleFacial } from "../tratamientos.const";
import { getTreatmentsFacial } from "@/app/src/controllers/treatments";

const Treatments = async () => {
  const treatments = await getTreatmentsFacial();

  return (
    <TreatmentsContent
      title={titleFacial}
      subTitle={subTitleFacial}
      data={treatments}
    />
  );
};

export default Treatments;
