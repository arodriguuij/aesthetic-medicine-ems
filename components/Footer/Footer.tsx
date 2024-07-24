import Image from "next/image";
import { navigation } from "./footer.consts";
import ListOfItems from "./ListOfItems";

const Footer = () => (
  <footer aria-labelledby="footer-heading">
    <div
      aria-labelledby="collection-heading"
      className="mx-auto max-w-5xl px-4 pt-0 sm:px-6 sm:pt-4 lg:max-w-7xl lg:px-8"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-16 lg:px-8 lg:pt-16 ">
        <div className="mt-8 border-t border-gray-900/10 pt-8 sm:mt-12 lg:mt-16"></div>

        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="space-y-5 pb-12 lg:pb-12">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              src="https://emsmedicinaestetica.com/assets/img/ems-mobile.png"
              alt=""
            />
            <p className="text-sm leading-6 text-gray-600">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    className="h-6 w-6 text-amber-400"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
            <p className="text-xs leading-5 text-gray-500">
              &copy; 2024 EMS, Inc. All rights reserved.
            </p>
          </div>
          <div className="md:grid md:grid-cols-3 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                Contacto
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.contact.map((item, index) => (
                  <ListOfItems item={item} key={item.name + index} />
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                Donde encontrarnos
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.support.map((item, index) => (
                  <ListOfItems item={item} key={item.name + index} />
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                Legal
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item, index) => (
                  <ListOfItems item={item} key={item.name + index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
