"use client";

import { useParams } from "next/navigation";
import { useGetTreatmentQuery } from "../../../../services/treatments/treatments";
import TreatmentContent from "@/components/TreatmentContent";

const Treatment = () => {
  const { id } = useParams();
  const { data, error } = useGetTreatmentQuery(id + "");

  return <TreatmentContent data={data} error={error} />;
};

export default Treatment;
