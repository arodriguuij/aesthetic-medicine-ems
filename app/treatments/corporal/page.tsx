"use client";

import TreatmentContent from "@/components/TreatmentContent";
import { useGetTreatmentsCorporalQuery } from "../../../services/treatments/treatments";

import { subTitleCorporal, titleCorporal } from "../treatments.const";

const Treatments = () => {
  const { data, error } = useGetTreatmentsCorporalQuery("");

  return (
    <TreatmentContent
      title={titleCorporal}
      subTitle={subTitleCorporal}
      error={error}
      data={data}
    />
  );
};

export default Treatments;
