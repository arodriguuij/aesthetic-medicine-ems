import TreatmentsContent from "../components/TreatmentsContent";
import { getTreatments } from "../src/controllers/treatments";
import { subTitleTreatments, titleTreatments } from "./treatments.const";

const Treatments = async () => {
  const treatments = await getTreatments();

  return (
    <TreatmentsContent
      title={titleTreatments}
      subTitle={subTitleTreatments}
      data={treatments}
    />
  );
};

export default Treatments;
