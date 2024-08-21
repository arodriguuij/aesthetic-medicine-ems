import TreatmentsContent from "@/app/components/TreatmentsContent";
import { subTitleFacial, titleFacial } from "../treatments.const";
import treatmentsFacialFetch from "./treatmentFacialFetch";

const Treatments = async () => {
  const { treatments } = await treatmentsFacialFetch();

  return (
    <TreatmentsContent
      title={titleFacial}
      subTitle={subTitleFacial}
      data={treatments}
    />
  );
};

export default Treatments;
