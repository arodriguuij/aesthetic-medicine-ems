"use client";

import { useGetTreatmentsFacialQuery } from "../../../services/treatments/treatments";

import { subTitleFacial, titleFacial } from "../treatments.const";
import TreatmentContent from "@/components/TreatmentContent";

const Treatments = () => {
  const { data, error } = useGetTreatmentsFacialQuery("");

  return (
    <TreatmentContent
      title={titleFacial}
      subTitle={subTitleFacial}
      error={error}
      data={data}
    />
  );
};

export default Treatments;
