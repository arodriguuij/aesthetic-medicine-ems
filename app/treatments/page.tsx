import TreatmentsContent from "../components/TreatmentsContent";
import { subTitleTreatments, titleTreatments } from "./treatments.const";
import treatmentsFetch from "./treatmentsFetch";

const Treatments = async () => {
  const { treatments } = await treatmentsFetch();

  return (
    <TreatmentsContent
      title={titleTreatments}
      subTitle={subTitleTreatments}
      data={treatments}
    />
  );
};

export default Treatments;
