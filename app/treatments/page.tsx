"use client";

import { useGetTreatmentsQuery } from "../../services/treatments/treatments";
import Loader from "../components/Loader";
import TreatmentsContent from "../components/TreatmentsContent";
import { subTitleTreatments, titleTreatments } from "./treatments.const";


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
