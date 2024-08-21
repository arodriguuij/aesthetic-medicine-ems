"use client";

import { useParams } from "next/navigation";
import { useGetTreatmentsAreaQuery } from "@/services/areas/areas";
import { titleArea } from "../../treatments.const";
import Loader from "@/app/components/Loader";
import TreatmentsContent from "@/app/components/TreatmentsContent";

const Treatments = () => {
  const { id } = useParams();

  const { data, error, status } = useGetTreatmentsAreaQuery(id + "");

  if (status === "pending") return <Loader />;

  return data ? (
    <TreatmentsContent
      title={`${titleArea} ${data?.areaName} (${data?.treatments.length})`}
      subTitle={data?.description || ""}
      data={data?.treatments}
    />
  ) : null;
};

export default Treatments;
