"use client";

import TreatmentsContent from "@/components/TreatmentsContent";
import { useGetTreatmentsCorporalQuery } from "../../../services/treatments/treatments";

import { subTitleCorporal, titleCorporal } from "../treatments.const";
import { Treatment } from "@/app/types/treatments.types";

const Treatments = () => {
  //const { data, error } = useGetTreatmentsCorporalQuery("");

  const data: Treatment[] = [];
  const error = undefined;

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
