"use client"

import { Treatment } from "@/app/types/treatments.types";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const QA = ({ questions }: { questions: Treatment["questions"] }) => (
  <div className="mx-auto max-w-7xl pt-16 pb-12 sm:px-6 sm:pb-12">
    <div className="mx-auto max-w-7xl divide-y divide-gray-900/10">
      <div className=" sm:flex sm:items-center sm:justify-between  xl:px-0">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Preguntas más frecuentes
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            servicios y tratamientos.
          </p>
        </div>
      </div>
      <dl className="mt-6 space-y-4 divide-y divide-gray-900/10">
        {questions?.map((faq, index) => (
          <Disclosure as="div" key={faq.question + index} className="pt-4">
            {({ open }) => (
              <>
                <dt>
                  <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  </div>
);

export default QA;
