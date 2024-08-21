"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TabGroup,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  navigationMobilePersonal,
  navigationMobileProducts,
} from "./header.consts";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

import ArrowDown from "../Icons/ArrowDown";
import ArrowUp from "../Icons/ArrowUp";
import ArrowRight from "../Icons/ArrowRight";
import {
  getDescriptionByGiftCardId,
  getImageByGiftCardId,
  getQuantityByGiftCardId,
} from "@/app/cart/cart.utils";
import { cloudinaryLoader } from "@/utils/cloudinary";
import { CardState, removeCard } from "@/lib/card/cardSlide";
import Image from "next/image";
import { classNames } from "@/utils/utilsServer";
import {
  useGetTreatmentsCorporalNamesQuery,
  useGetTreatmentsFacialNamesQuery,
} from "@/services/treatments/treatments";
import { useGetAreasQuery } from "@/services/areas/areas";
import { useGetGiftCardsQuery } from "@/services/giftCards/giftCards";
import { scrollToTop } from "@/utils/utils";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    data: facialTreatmentsData,
    error: facialTreatmentsError,
    status: facialTreatmentsStatus,
  } = useGetTreatmentsFacialNamesQuery("");
  const {
    data: corporalTreatments,
    error: corporalTreatmentsError,
    status: corporalTreatmentsStatus,
  } = useGetTreatmentsCorporalNamesQuery("");
  const {
    data: areasData,
    error: areasError,
    status: areasStatus,
  } = useGetAreasQuery("");
  const { data: giftCardsData, error: giftCardsError } =
    useGetGiftCardsQuery("");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPopoverFacialVisible, setPopoverFacialVisible] = useState(false);
  const [isPopoverCorporalVisible, setPopoverCorporalVisible] = useState(false);
  const [isPopoverAreasVisible, setPopoverAreasVisible] = useState(false);
  const [isPopoverGiftCartsVisible, setPopoverGiftCartsVisible] =
    useState(false);

  const giftCard = useSelector(
    (state: { card: CardState }) => state.card.giftCard
  );

  const scrollToTopFnc = () => {
    scrollToTop();
    setPopoverFacialVisible(false);
    setPopoverCorporalVisible(false);
    setPopoverAreasVisible(false);
    setPopoverGiftCartsVisible(false);
  };
  const scrollToTopFncNoScroll = () => {
    setPopoverFacialVisible(false);
    setPopoverCorporalVisible(false);
    setPopoverAreasVisible(false);
    setPopoverGiftCartsVisible(false);
  };

  /* TODO: small Loader
  if (
    facialTreatmentsStatus === "pending" ||
    corporalTreatmentsStatus === "pending" ||
    areasStatus === "pending"
  )
    return <Loader />; */

  const CartButton = () => (
    <div className="flex items-center lg:ml-8">
      <Popover className="flow-root text-sm lg:relative lg:ml-8">
        <PopoverButton
          className="group -m-2 flex items-center p-2"
          onClick={() => {
            setPopoverGiftCartsVisible((prevState) => !prevState);
            setPopoverFacialVisible(false);
            setPopoverCorporalVisible(false);
            setPopoverAreasVisible(false);
          }}
        >
          <ShoppingBagIcon
            aria-hidden="true"
            className="h-6 w-6 flex-shrink-0 text-gray-400 hover:text-amber-600 data-[open]:text-amber-700"
          />
          <span className="ml-2 text-sm font-medium text-gray-400 hover:text-amber-600 data-[open]:text-amber-700">
            {giftCard.selectedGiftCardId ? 1 : 0}
          </span>
          <span className="sr-only">Productos en el carro</span>
        </PopoverButton>
        <Transition
          show={isPopoverGiftCartsVisible}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <PopoverPanel
            transition
            static={isPopoverGiftCartsVisible}
            className="absolute inset-x-0 top-10 mt-2 px-2 bg-white pb-6 shadow-lg transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5"
          >
            <h2 className="sr-only">Shopping Cart</h2>

            <ul role="list" className="divide-y divide-gray-200">
              {giftCardsError && (
                <>Error en la carga de las tarjetas de regalo</>
              )}
              {giftCardsData && giftCard.selectedGiftCardId && (
                <li className="flex items-center px-4 py-6">
                  <Image
                    alt={giftCard.selectedGiftCardId + "Image"}
                    src={cloudinaryLoader({
                      src:
                        getImageByGiftCardId(
                          giftCardsData,
                          giftCard.selectedGiftCardId
                        ) || "",
                    })}
                    width={1000}
                    height={1000}
                    className="h-16 w-24 flex-none rounded-md border border-gray-200"
                  />

                  <div className="ml-4 flex-auto">
                    <h3 className="font-medium text-gray-900">
                      Tarjeta de regalo
                    </h3>
                    <p className="text-gray-500">
                      {getDescriptionByGiftCardId(
                        giftCardsData,
                        giftCard.selectedGiftCardId
                      )}
                    </p>
                    <p className="text-gray-500">
                      {getQuantityByGiftCardId(
                        giftCardsData,
                        giftCard.selectedGiftCardId
                      )}
                      €
                    </p>
                  </div>
                  <XMarkIcon
                    aria-hidden="true"
                    className="h-6 w-6 flex-shrink-0 cursor-pointer text-red-400 hover:text-red-600 data-[open]:text-red-700"
                    onClick={() => {
                      dispatch(removeCard());
                    }}
                  />
                </li>
              )}
            </ul>
            {!giftCard.selectedGiftCardId ? (
              <p className="mt-6 text-center">
                <p className="text-center">El carrito está vacío</p>
                <button
                  onClick={() => {
                    setPopoverGiftCartsVisible(false);
                    router.push("/giftCard");
                    scrollToTopFnc();
                  }}
                  className="w-full mt-6 text-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Añade productos
                </button>
              </p>
            ) : (
              <button
                onClick={() => {
                  setPopoverGiftCartsVisible(false);
                  router.push("/cart");
                  scrollToTopFnc();
                }}
                disabled={!giftCardsData || !giftCard.selectedGiftCardId}
                className={
                  giftCardsData && giftCard.selectedGiftCardId
                    ? "w-full mt-6 text-center rounded-md border border-transparent bg-amber-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    : "w-full mt-6 text-center rounded-md border border-transparent bg-gray-400 px-4 py-2 text-sm font-medium text-white shadow-sm"
                }
              >
                Proceder al pago
              </button>
            )}
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  );

  return (
    <header className="z-20 bg-white sticky top-0 ">
      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex justify-end">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-gray-900 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5 justify-end">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div style={{ height: "100%", alignContent: "center" }}>
              {/* Links */}
              <TabGroup className="mt-2">
                <TabPanels as={Fragment}>
                  {navigationMobileProducts.map((item) => (
                    <TabPanel key={item.name} className="space-y-12 px-4 py-3">
                      <div className="space-y-2">
                        {navigationMobileProducts.map((item, index) => {
                          if (item.name === "Areas") {
                            return (
                              <Disclosure
                                as="div"
                                key={item.name + index}
                                className="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-800"
                              >
                                {({ open }) => (
                                  <>
                                    <DisclosureButton
                                      className="flex w-full items-center py-2 rounded-lg text-2xl font-semibold leading-7 text-gray-200"
                                      style={{ justifyContent: "center" }}
                                    >
                                      {item.name}
                                      <ChevronDownIcon
                                        className={classNames(
                                          open ? "rotate-180" : "",
                                          "h-7 w-7 flex-none"
                                        )}
                                        aria-hidden="true"
                                      />
                                    </DisclosureButton>
                                    <DisclosurePanel
                                      className="mx-auto grid grid-cols-2 gap-x-4 mt-2"
                                      style={{ justifyItems: "self-start" }}
                                    >
                                      {areasError && (
                                        <>Error en la carga de las áreas</>
                                      )}
                                      {areasData?.map((item, index) => (
                                        <Link
                                          key={item.name + index}
                                          href={`/treatments/areas/${item.id}`}
                                          style={{ textAlign: "center" }}
                                          aria-label="Enlace a la pagina del area"
                                        >
                                          <div
                                            onClick={() => {
                                              scrollToTopFncNoScroll();
                                              setMobileMenuOpen(false);
                                            }}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-200 hover:bg-gray-800"
                                          >
                                            <p className="text-sm text-gray-200">
                                              {item.name}
                                            </p>
                                          </div>
                                        </Link>
                                      ))}
                                    </DisclosurePanel>
                                  </>
                                )}
                              </Disclosure>
                            );
                          } else
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                style={{ textAlign: "center" }}
                                aria-label={`Enlace a la pagina ${item.name}`}
                              >
                                <div
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    scrollToTopFncNoScroll();
                                  }}
                                  className="-mx-3 block rounded-lg px-3 py-4 text-2xl font-semibold leading-7 text-gray-200 hover:bg-gray-800"
                                >
                                  {item.name}
                                </div>
                              </Link>
                            );
                        })}
                      </div>
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>

              <div className="border-t border-gray-200 px-4 pt-4">
                {navigationMobilePersonal.map((item, index) => (
                  <Link
                    key={item.name + index}
                    href={item.href}
                    style={{ textAlign: "center" }}
                    aria-label={`Enlace a la pagina ${item.name}`}
                  >
                    <div
                      onClick={() => {
                        setMobileMenuOpen(false);
                        scrollToTopFncNoScroll();
                      }}
                      className="-mx-3 block rounded-lg px-3 py-4 text-2xl font-semibold leading-7 text-gray-200 hover:bg-amber-50"
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="relative ">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-white ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
              <div className="flex h-12 items-center justify-between border-b-[1px]">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <Link href="/" aria-label="Enlace a la pagina home">
                    <div
                      onClick={scrollToTopFncNoScroll}
                      className="-m-1.5 p-1.5"
                    >
                      <span className="sr-only">Your Company</span>
                      <Image
                        alt="logoEMS"
                        src={cloudinaryLoader({
                          src: "EMS/General/EmsLogo",
                        })}
                        width={269}
                        height={195}
                        className="h-8 w-auto"
                        priority={true}
                      />
                    </div>
                  </Link>
                </div>

                {/* Flyout menus */}
                <div className="hidden h-full lg:flex">
                  <PopoverGroup className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      <Popover key="FacialPopover" className="flex">
                        <div className="relative flex">
                          <PopoverButton
                            onClick={() => {
                              setPopoverCorporalVisible(false);
                              setPopoverAreasVisible(false);
                              setPopoverGiftCartsVisible(false);
                              setPopoverFacialVisible(
                                (prevState) => !prevState
                              );
                            }}
                            className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-amber-600 data-[open]:text-amber-700"
                          >
                            <p className="mr-1">Facial</p>
                            {isPopoverFacialVisible ? (
                              <ArrowUp />
                            ) : (
                              <ArrowDown />
                            )}
                            <span
                              aria-hidden="true"
                              className="absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out group-data-[open]:bg-amber-700"
                            />
                          </PopoverButton>
                        </div>
                        <Transition
                          show={isPopoverFacialVisible}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <PopoverPanel
                            transition
                            static={isPopoverFacialVisible}
                            className="group absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 top-1/2 bg-white shadow"
                            />
                            {/* Fake border when menu is open */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
                            >
                              <div className="h-px w-full bg-transparent transition-colors duration-200 ease-out group-data-[open]:bg-gray-200" />
                            </div>

                            <div className="relative">
                              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <>
                                  <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-6 lg:px-8 xl:gap-x-8">
                                    {facialTreatmentsError && (
                                      <>
                                        Error en la carga de los tratamientos
                                        faciales
                                      </>
                                    )}
                                    {facialTreatmentsData?.length &&
                                      facialTreatmentsData.map(
                                        ({ id, title }, index) => (
                                          <div
                                            key={title + index}
                                            className="group relative rounded-lg p-2 text-sm leading-"
                                          >
                                            <Link
                                              href={`/treatments/facial/${id}`}
                                              aria-label="Enlace a la pagina del tratamiento facial"
                                            >
                                              <div
                                                onClick={scrollToTopFncNoScroll}
                                                className="block text-gray-700 hover:text-amber-600 data-[open]:text-amber-700"
                                              >
                                                {title}
                                                <span className="absolute inset-0" />
                                              </div>
                                            </Link>
                                          </div>
                                        )
                                      )}
                                  </div>
                                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                    <Link
                                      href={"/treatments/facial"}
                                      aria-label="Enlace a la pagina de tratamientos faciales"
                                    >
                                      <div
                                        onClick={scrollToTopFncNoScroll}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm leading-6 text-amber-600  hover:text-amber-700 data-[open]:text-amber-700"
                                      >
                                        Todos los tratamientos faciales
                                        <ArrowRight />
                                      </div>
                                    </Link>
                                  </div>
                                </>
                              </div>
                            </div>
                          </PopoverPanel>
                        </Transition>
                      </Popover>

                      <Popover key="CorporalPopover" className="flex">
                        <div className="relative flex">
                          <PopoverButton
                            onClick={() => {
                              setPopoverFacialVisible(false);
                              setPopoverAreasVisible(false);
                              setPopoverGiftCartsVisible(false);
                              setPopoverCorporalVisible(
                                (prevState) => !prevState
                              );
                            }}
                            className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-amber-600 data-[open]:text-amber-700"
                          >
                            <p className="mr-1">Corporal</p>
                            {isPopoverCorporalVisible ? (
                              <ArrowUp />
                            ) : (
                              <ArrowDown />
                            )}
                            <span
                              aria-hidden="true"
                              className="absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out group-data-[open]:bg-amber-700"
                            />
                          </PopoverButton>
                        </div>
                        <Transition
                          show={isPopoverCorporalVisible}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <PopoverPanel
                            transition
                            static={isPopoverCorporalVisible}
                            className="group absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 top-1/2 bg-white shadow"
                            />
                            {/* Fake border when menu is open */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
                            >
                              <div className="h-px w-full bg-transparent transition-colors duration-200 ease-out group-data-[open]:bg-gray-200" />
                            </div>

                            <div className="relative">
                              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <>
                                  <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-6 lg:px-8 xl:gap-x-8">
                                    {corporalTreatmentsError && (
                                      <>
                                        Error en la carga de los tratamientos
                                        corporales
                                      </>
                                    )}
                                    {corporalTreatments?.length &&
                                      corporalTreatments.map(
                                        ({ id, title }, index) => (
                                          <div
                                            key={title + index}
                                            className="group relative rounded-lg p-2 text-sm leading-6"
                                          >
                                            <Link
                                              href={`/treatments/corporal/${id}`}
                                              aria-label="Enlace a la pagina del tratamiento corporal"
                                            >
                                              <div
                                                onClick={scrollToTopFncNoScroll}
                                                className="block text-gray-700  hover:text-amber-600 data-[open]:text-amber-700"
                                              >
                                                {title}
                                                <span className="absolute inset-0" />
                                              </div>
                                            </Link>
                                          </div>
                                        )
                                      )}
                                  </div>
                                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                    <Link
                                      href={"/treatments/corporal"}
                                      aria-label="Enlace a la pagina de tratamientos corporales"
                                    >
                                      <div
                                        onClick={scrollToTopFncNoScroll}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm leading-6 text-amber-600  hover:text-amber-700 data-[open]:text-amber-700"
                                      >
                                        Todos los tratamientos corporales
                                        <ArrowRight />
                                      </div>
                                    </Link>
                                  </div>
                                </>
                              </div>
                            </div>
                          </PopoverPanel>
                        </Transition>
                      </Popover>

                      <Popover key="AreasPopover" className="flex">
                        <div className="relative flex">
                          <PopoverButton
                            onClick={() => {
                              setPopoverFacialVisible(false);
                              setPopoverCorporalVisible(false);
                              setPopoverGiftCartsVisible(false);
                              setPopoverAreasVisible((prevState) => !prevState);
                            }}
                            className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-amber-600 data-[open]:text-amber-700"
                          >
                            <p className="mr-1">Areas</p>
                            {isPopoverAreasVisible ? (
                              <ArrowUp />
                            ) : (
                              <ArrowDown />
                            )}
                            <span
                              aria-hidden="true"
                              className="absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out group-data-[open]:bg-amber-700"
                            />
                          </PopoverButton>
                        </div>
                        <Transition
                          show={isPopoverAreasVisible}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <PopoverPanel
                            transition
                            static={isPopoverAreasVisible}
                            className="group absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 top-1/2 bg-white shadow"
                            />
                            {/* Fake border when menu is open */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
                            >
                              <div className="h-px w-full bg-transparent transition-colors duration-200 ease-out group-data-[open]:bg-gray-200" />
                            </div>

                            <div className="relative">
                              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-6 lg:px-8 xl:gap-x-8">
                                  {areasError && (
                                    <>Error en la carga de las áreas</>
                                  )}
                                  {areasData?.length &&
                                    areasData.map(({ id, name }, index) => {
                                      return (
                                        <div
                                          key={name + index + "mobile"}
                                          className="group relative rounded-lg p-2 text-sm leading-6"
                                        >
                                          <Link
                                            href={`/treatments/areas/${id}`}
                                            aria-label="Enlace a la pagina del area"
                                          >
                                            <div
                                              onClick={scrollToTopFncNoScroll}
                                              className="block text-gray-700  hover:text-amber-600 data-[open]:text-amber-700"
                                            >
                                              {name}
                                              <span className="absolute inset-0" />
                                            </div>
                                          </Link>
                                        </div>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </Transition>
                      </Popover>

                      <Link
                        href="/products"
                        aria-label="Enlace a la pagina de productos"
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-amber-600 data-[open]:text-amber-700"
                      >
                        <div onClick={scrollToTopFncNoScroll}>Productos</div>
                      </Link>

                      <Link
                        href="/giftCard"
                        aria-label="Enlace a la pagina de tarjeta de regalo"
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-amber-600 data-[open]:text-amber-700"
                      >
                        <div onClick={scrollToTopFncNoScroll}>
                          Tarjeta Regalo
                        </div>
                      </Link>

                      <Link
                        href="/aboutMe"
                        aria-label="Enlace a la pagina sobre mi"
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-amber-600 data-[open]:text-amber-700"
                      >
                        <div onClick={scrollToTopFncNoScroll}>Sobre mi</div>
                      </Link>

                      <Link
                        href="/contact"
                        aria-label="Enlace a la pagina de contacto"
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-amber-600 data-[open]:text-amber-600"
                      >
                        <div onClick={scrollToTopFncNoScroll}>Contacto</div>
                      </Link>
                    </div>
                  </PopoverGroup>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  {CartButton()}
                </div>

                {/* Logo (lg-) */}
                <Link href="/" aria-label="Enlace a la pagina home">
                  <div onClick={scrollToTopFncNoScroll} className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <Image
                      alt="logoEMS"
                      src={cloudinaryLoader({
                        src: "EMS/General/EmsLogo",
                      })}
                      width={269}
                      height={195}
                      className="h-8 w-auto"
                      priority={true}
                    />
                  </div>
                </Link>

                {/* Cart */}
                <div className="flex flex-1 items-center justify-end">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400 block lg:hidden"
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                  </button>
                  <div className="lg:block hidden">{CartButton()}</div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
