import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import { DataFormContact } from "@/app/types/emails.types";
import {
  container,
  footer,
  hr,
  logo,
  main,
  paragraph,
} from "./contactMail.styles";
import { isProd, publicUrl } from "@/utils/utils";

/* const dataMock = {
  userName: "alejandro",
  phoneNumber: 123123123,
  email: "alejandro@gmail.com",
  awareness: "Búsqueda en la web",
  message: "Hola, esto es una consulta médica",
}; */

const ContactMail = ({
  userName,
  phoneNumber,
  email,
  awareness,
  message,
}: DataFormContact) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${publicUrl}Images/logo.png`}
          width="170"
          height="90"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Hola! Soy {userName},</Text>
        <Text style={paragraph}>
          Me pongo en contacto con la clínica de medicina estética EMS con la
          siguiente consulta:
        </Text>
        <Text style={paragraph}>{message}</Text>
        <Hr style={hr} />
        <Text style={paragraph}>Otros datos de la consulta:</Text>
        <Text style={paragraph}>- Email: {email}</Text>
        <Text style={paragraph}>- Teléfono: {phoneNumber}</Text>
        <Text style={paragraph}>- Dónde nos ha encontrado: {awareness}</Text>
        <Hr style={hr} />
        <Text style={footer}>
          Mensaje enviado por {userName} a través de la web de
          www.medicinaestéticaems.com
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactMail;
