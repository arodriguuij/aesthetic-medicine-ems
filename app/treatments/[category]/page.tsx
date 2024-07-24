"use client";

import { useRouter } from "next/router";
import Link from "next/link";
import {
  useGetTreatmentsFacialQuery,
  useGetTreatmentsQuery,
} from "../../../services/treatments/treatments";
import { useGetTreatmentsCorporalQuery } from "../../../services/treatments/treatments";
import {
  subTitleCorporal,
  subTitleFacial,
  subTitleTreatments,
  titleArea,
  titleCorporal,
  titleFacial,
  titleTreatments,
} from "./treatments.const";
import Breadcrumb from "../../../components/Breadcrumb";
import { scrollToTop } from "../../../utils/utils";
import { useGetTreatmentsAreaQuery } from "../../../services/areas/areas";
import Image from "next/image";

const Treatments = () => {
  const router = useRouter();
  const location = router.asPath; 
  const { id } = router.query;

  let data, error, title, subTitle;
  const { data: treatmentsData, error: treatmentsError } =
    useGetTreatmentsQuery("");
  const { data: facialTreatmentsData, error: facialTreatmentsError } =
    useGetTreatmentsFacialQuery("");
  const { data: corporalTreatmentsData, error: corporalTreatmentsError } =
    useGetTreatmentsCorporalQuery("");
  const { data: areaTreatmentsData, error: areaTreatmentsError } =
    useGetTreatmentsAreaQuery(id + "", id ? { skip: false } : { skip: true });

  if (location === "/treatments/facial") {
    data = facialTreatmentsData;
    error = facialTreatmentsError;
    title = titleFacial;
    subTitle = subTitleFacial;
  }
  if (location === "/treatments/corporal") {
    data = corporalTreatmentsData;
    error = corporalTreatmentsError;
    title = titleCorporal;
    subTitle = subTitleCorporal;
  }
  if (location === `/treatments/areas/${id}`) {
    data = areaTreatmentsData?.treatments;
    error = areaTreatmentsError;
    title = `${titleArea} ${areaTreatmentsData?.areaName} (${areaTreatmentsData?.treatments.length})`;
    subTitle = areaTreatmentsData?.description;
  }
  if (location === `/treatments`) {
    data = treatmentsData;
    error = treatmentsError;
    title = titleTreatments;
    subTitle = subTitleTreatments;
  }

  return (
    <div className="isolate mx-auto  px-6 lg:px-8 items-center">
      {/* Breadcrumb */}
      <div className="mx-auto py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8 pr-4">
        <Breadcrumb />
      </div>

      {/* Treatments */}

      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-yellow-100/20 pt-4">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-yellow-600/10 ring-1 ring-yellow-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        {error ? (
          <div className="mx-auto pb-2 sm:px-6 sm:pb-4 lg:max-w-7xl lg:px-8">
            Error en la carga de los tratamiento
          </div>
        ) : (
          <>
            <div className="mx-auto sm:px-6  mb-8 lg:max-w-7xl lg:px-8">
              <div className="flex">
                <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {title}
                </h2>
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-600">{subTitle}</p>
            </div>

            <div
              className="mx-auto py-2 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8 grid grid-cols-1 gap-x-8 gap-y-12 lg:mx-0  lg:grid-cols-3"
              style={{ marginInline: "auto" }}
            >
              {data &&
                data.map((treatment, index) => (
                  <article
                    key={treatment.id + index + treatment.title}
                    className="flex flex-col items-start justify-between"
                  >
                    <div className="relative w-full hover:opacity-75">
                      <Link
                        onClick={scrollToTop}
                        href={`/treatments/${treatment.type.toLowerCase()}/${
                          treatment.id
                        }`}
                      >
                        <Image
                          src={treatment.images.main}
                          alt=""
                          className="aspect-[16/9] w-full rounded-2xl border border-amber-400 bg-white object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </Link>
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-4 flex items-center gap-x-1 text-xs justify-between">
                        <div>
                          <p className="text-gray-500">Duración:</p>
                          <p className="text-gray-900">
                            {treatment.properties.duration}
                          </p>
                        </div>
                        <div>
                          {treatment.properties.populatedAreas
                            ?.slice(0, 3)
                            ?.map((area, index) => (
                              <Link
                                onClick={scrollToTop}
                                key={area.id + index + area.name}
                                href={`/treatments/areas/${area.id}`}
                              >
                                <span className="inline-flex items-center rounded-md bg-amber-50 px-1.5 py-0.5 text-xs mx-1 font-medium text-amber-600 ring-1 ring-inset ring-amber-500/10">
                                  {area.name}
                                </span>
                              </Link>
                            ))}
                        </div>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <Link
                            href={`${location}/${treatment.id}`}
                            onClick={scrollToTop}
                          >
                            <span className="absolute inset-0" />
                            {treatment.title}
                          </Link>
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                          {treatment.shortDescription}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Treatments;
