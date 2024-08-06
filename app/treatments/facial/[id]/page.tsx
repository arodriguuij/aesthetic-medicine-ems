"use client";

import { useParams } from "next/navigation";
import { useGetTreatmentQuery } from "../../../../services/treatments/treatments";
import TreatmentContent from "@/components/TreatmentContent";
import Loader from "@/components/Loader";

const Treatment = () => {
  const { id } = useParams();
  const { data, error, status } = useGetTreatmentQuery(id + "");

  if (status === "pending") return <Loader />;

  return <TreatmentContent data={data} error={error} />;
};

export default Treatment;
