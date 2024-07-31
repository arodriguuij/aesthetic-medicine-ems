"use client";

import { useParams } from "next/navigation";
import { useGetTreatmentsAreaQuery } from "@/services/areas/areas";
import { titleArea } from "../../treatments.const";
import TreatmentContent from "@/components/TreatmentsContent";

const Treatments = () => {
  const { id } = useParams();

  //const { data, error } = useGetTreatmentsAreaQuery(id + "");
  const data= {
    treatments: [],
    areaName: 'string',
    description: 'string'
  }
  const error=undefined

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
