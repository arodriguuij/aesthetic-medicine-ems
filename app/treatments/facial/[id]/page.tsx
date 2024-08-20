"use client";

import { useParams } from "next/navigation";
import Loader from "@/app/components/Loader";
import TreatmentContent from "@/app/components/TreatmentContent";
import { useGetTreatmentQuery } from "@/services/treatments/treatments";

const Treatment = () => {
  const { id } = useParams();
  const { data, error, status } = useGetTreatmentQuery(id + "");

  if (status === "pending") return <Loader />;

  return <TreatmentContent data={data} error={error} />;
};

export default Treatment;
