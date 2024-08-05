"use client";

import { useGetTreatmentsQuery } from "../../services/treatments/treatments";
import { subTitleTreatments, titleTreatments } from "./treatments.const";

import TreatmentsContent from "@/components/TreatmentsContent";

const Treatments = () => {
  const { data, error } = useGetTreatmentsQuery("");

  return (
    <TreatmentsContent
      title={titleTreatments}
      subTitle={subTitleTreatments}
      error={error}
      data={data}
    />
  );
};

export default Treatments;
