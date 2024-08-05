"use client";

import TreatmentsContent from "@/components/TreatmentsContent";
import { useGetTreatmentsCorporalQuery } from "../../../services/treatments/treatments";

import { subTitleCorporal, titleCorporal } from "../treatments.const";

const Treatments = () => {
  const { data, error } = useGetTreatmentsCorporalQuery("");

  return (
    <TreatmentsContent
      title={titleCorporal}
      subTitle={subTitleCorporal}
      error={error}
      data={data}
    />
  );
};

export default Treatments;
