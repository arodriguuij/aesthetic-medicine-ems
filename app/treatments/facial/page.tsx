"use client";

import Loader from "@/components/Loader";
import { useGetTreatmentsFacialQuery } from "../../../services/treatments/treatments";

import { subTitleFacial, titleFacial } from "../treatments.const";
import TreatmentsContent from "@/components/TreatmentsContent";

const Treatments = () => {
  const { data, error, status } = useGetTreatmentsFacialQuery("");

  if (status === "pending") return <Loader />;

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
