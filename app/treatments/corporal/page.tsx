import TreatmentsContent from "@/app/components/TreatmentsContent";
import { subTitleCorporal, titleCorporal } from "../treatments.const";
import treatmentsCorporalFetch from "./treatmentsCorporalFetch";

const Treatments = async () => {
  const { treatments } = await treatmentsCorporalFetch();

  return (
    <TreatmentsContent
      title={titleCorporal}
      subTitle={subTitleCorporal}
      data={treatments}
    />
  );
};

export default Treatments;
