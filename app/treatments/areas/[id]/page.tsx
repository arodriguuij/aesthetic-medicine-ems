"use client";

import { useParams } from "next/navigation";
import { useGetTreatmentsAreaQuery } from "@/services/areas/areas";
import { titleArea } from "../../treatments.const";
import TreatmentContent from "@/components/TreatmentsContent";
import Loader from "@/components/Loader";

const Treatments = () => {
  const { id } = useParams();

  const { data, error, status } = useGetTreatmentsAreaQuery(id + "");

  if (status === "pending") return <Loader />;

  return data ? (
    <TreatmentContent
      title={`${titleArea} ${data?.areaName} (${data?.treatments.length})`}
      subTitle={data?.description || ""}
      error={error}
      data={data?.treatments}
    />
  ) : null;
};

export default Treatments;
