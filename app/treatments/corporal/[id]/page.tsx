"use client";

import { useParams } from "next/navigation";
import { useGetTreatmentQuery } from "../../../../services/treatments/treatments";
import Loader from "@/app/components/Loader";
import TreatmentContent from "@/app/components/TreatmentContent";


const Treatment = () => {
  const { id } = useParams();
  const { data, error, status } = useGetTreatmentQuery(id + "");
  
  if (status === "pending") return <Loader />;

  return <TreatmentContent data={data} error={error} />;
};

export default Treatment;
