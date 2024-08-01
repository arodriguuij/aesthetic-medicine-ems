"use client";

import { useParams } from "next/navigation";
import { useGetTreatmentQuery } from "../../../../services/treatments/treatments";
import TreatmentContent from "@/components/TreatmentContent";
import { TreatmentStatus, TreatmentType } from "@/services/treatments/treatments.types";

const Treatment = () => {
  const { id } = useParams();
  //const { data, error } = useGetTreatmentQuery(id + "");

  const data = [
    {
      id: 1,
      title: "string",
      subtitle: "string",
      properties: {
        time: "string",
        anesthesia: true,
        areas: [1],
        duration: "string",
        resultsTime: "string",
      },
      shortDescription: "string",
      longDescription: ["string"],
      images: {
        main: "string",
        clients: ["string"],
      },
      type: TreatmentType.CORPORAL,
      status: TreatmentStatus.ACTIVE,
      startTreatment: true,
      questions: [
        {
          question: "string",
          answer: "string",
        },
      ],
      priority: 1,
    },
  ];
  const error = undefined;

  return <TreatmentContent data={data} error={error} />;
};

export default Treatment;
