"use client";

import { useGetTreatmentsQuery } from "../../services/treatments/treatments";
import { Treatment } from "../types/treatments.types";
import { subTitleTreatments, titleTreatments } from "./treatments.const";

import TreatmentsContent from "@/components/TreatmentsContent";

const Treatments = () => {
  //const { data, error } = useGetTreatmentsQuery("");

  const data: Treatment[] = [];
  const error = undefined;

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
