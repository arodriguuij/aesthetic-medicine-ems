"use client";

import { useGetTreatmentsFacialQuery } from "../../../services/treatments/treatments";

import { subTitleFacial, titleFacial } from "../treatments.const";
import TreatmentsContent from "@/components/TreatmentsContent";

const Treatments = () => {
  const { data, error } = useGetTreatmentsFacialQuery("");

  return (
    <TreatmentsContent
      title={titleFacial}
      subTitle={subTitleFacial}
      error={error}
      data={data}
    />
  );
};

export default Treatments;
