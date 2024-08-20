"use client";

import TreatmentsContent from "@/app/components/TreatmentsContent";
import { useGetTreatmentsCorporalQuery } from "../../../services/treatments/treatments";

import { subTitleCorporal, titleCorporal } from "../treatments.const";
import Loader from "@/app/components/Loader";

const Treatments = () => {
  const { data, error, status } = useGetTreatmentsCorporalQuery("");

  if (status === "pending") return <Loader />;

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
