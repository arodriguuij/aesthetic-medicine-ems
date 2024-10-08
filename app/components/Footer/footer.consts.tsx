import Address from "../Icons/Address";
import Calendar from "../Icons/Calendar";
import Document from "../Icons/Document";
import Email from "../Icons/Email";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Phone from "../Icons/Phone";
import { Navigation } from "./footer.types";

export const navigation: Navigation = {
  contact: [
    {
      name: "+34 611 88 21 39",
      href: "tel:+34611882139",
      icon: (props) => <Phone props={props} />,
    },
    {
      name: "clinicamedicoesteticaems @gmail.com",
      href: "mailto:clinicamedicoesteticaems@gmail.com?utm_source=mail",
      icon: (props) => <Email props={props} />,
    },
  ],
  support: [
    {
      name: "C. Pablo Luengo, 23. 10300 Navalmoral de la Mata, Cáceres",
      href: "https://www.google.com/maps/place/Policl%C3%ADnica+Navalmoral+SL/@39.8949182,-5.545252,17z/data=!3m1!4b1!4m6!3m5!1s0xd3fd9ca964ee18d:0xd4044ef40795f356!8m2!3d39.8949141!4d-5.5426771!16s%2Fg%2F1tk8ddsz?entry=ttu",
      icon: (props) => <Address props={props} />,
    },
  ],
  schedule: [
    {
      name: "Lunes: 15:00-20:00",
      href: "/contacto",
      icon: (props) => <Calendar props={props} />,
      isLink: true,
    },
    {
      name: "Martes: 9:00-13:00 y 16:00-20:00",
      href: "/contacto",
      icon: () => <div className="mr-3 ml-3"></div>,
      isLink: true,
    },
    {
      name: "Miércoles: 9:00-13:00",
      href: "/contacto",
      icon: () => <div className="mr-3 ml-3"></div>,
      isLink: true,
    },
    {
      name: "Jueves: 10:00-14:00 y 16:00-20:00",
      href: "/contacto",
      icon: () => <div className="mr-3 ml-3"></div>,
      isLink: true,
    },
    {
      name: "Viernes: 9:30-14:30",
      href: "/contacto",
      icon: () => <div className="mr-3 ml-3"></div>,
      isLink: true,
    },
  ],
  legal: [
    {
      name: "Privacidad",
      href: "/privacidad",
      icon: (props) => <Document props={props} />,
      isLink: true,
    },
    /* {
      name: "Cookies",
      href: "/cookies",
      icon: (props) => <Document props={props} />,
      isLink: true,
    }, */
    {
      name: "Legal",
      href: "/legal",
      icon: (props) => <Document props={props} />,
      isLink: true,
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100065100515616",
      icon: (props) => <Facebook props={props} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dra.elviramorgado/",
      icon: (props) => <Instagram props={props} />,
    },
  ],
};
