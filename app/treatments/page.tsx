"use client";

import Loader from "@/components/Loader";
import { useGetTreatmentsQuery } from "../../services/treatments/treatments";
import { subTitleTreatments, titleTreatments } from "./treatments.const";

import TreatmentsContent from "@/components/TreatmentsContent";

const Treatments = () => {
  const { data, error, status } = useGetTreatmentsQuery("");

  if (status === "pending") return <Loader />;

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
