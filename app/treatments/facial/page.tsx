"use client";

import { Treatment } from "@/app/types/treatments.types";
import { useGetTreatmentsFacialQuery } from "../../../services/treatments/treatments";

import { subTitleFacial, titleFacial } from "../treatments.const";
import TreatmentsContent from "@/components/TreatmentsContent";

const Treatments = () => {
  //const { data, error } = useGetTreatmentsFacialQuery("");

  const data: Treatment[] = [];
  const error = undefined;

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
