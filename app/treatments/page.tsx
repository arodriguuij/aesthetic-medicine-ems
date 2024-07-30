"use client";

import { useGetTreatmentsQuery } from "../../services/treatments/treatments";
import { subTitleTreatments, titleTreatments } from "./treatments.const";

import TreatmentContent from "@/components/TreatmentContent";

const Treatments = () => {
  const { data, error } = useGetTreatmentsQuery("");

  return (
    <TreatmentContent
      title={titleTreatments}
      subTitle={subTitleTreatments}
      error={error}
      data={data}
    />
  );
};

export default Treatments;
