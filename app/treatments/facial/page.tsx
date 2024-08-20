"use client";

import TreatmentsContent from "@/app/components/TreatmentsContent";
import { useGetTreatmentsFacialQuery } from "../../../services/treatments/treatments";

import { subTitleFacial, titleFacial } from "../treatments.const";
import Loader from "@/app/components/Loader";

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
