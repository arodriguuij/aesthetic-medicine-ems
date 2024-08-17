import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import {
  adressTitle,
  container,
  footer,
  globalMail,
  main,
  menu,
  messageMail,
  paddingX,
  paddingY,
  paragraph,
  track,
} from "./recipeMailNike.styles";
import { GiftCardFormGet } from "@/app/types/giftCards.types";

let baseUrl;
if (process.env.NEXT_PUBLIC_STRIPE_ENVIRONMENT === "prod") {
  baseUrl = process.env.NEXT_PUBLIC_URL;
} else {
  baseUrl = "http://localhost:3000/";
}

const giftCard = {
  email: "socorrista92re@gmail.com",
  id: 84,
  message:
    "socorrista92re@gmail.com socorrista92re@gmail.com socorrista92re@gmail.com socorrista92re@gmail.com socorrista92re@gmail.com",
  nameBuyer: "Elvira",
  nameReceiver: "alejandro",
  selectedGiftCardId: 1,
};

const RecipeMail = () => (
  <Html>
    <Head />
    <Preview>Obtenga el resumen de su pedido</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={messageMail}>
          <Img
            src={`${baseUrl}Images/logo.png`}
            width="66"
            height="50"
            alt="EMS logo"
            style={{ margin: "auto" }}
          />

          <Heading style={globalMail.heading}>Tarjeta de Regalo EMS</Heading>
          <Text style={globalMail.text}>Hola {giftCard.nameBuyer},</Text>
          <Text style={{ ...globalMail.text, marginTop: 4 }}>
            ¡Felicitaciones! Tu tarjeta de regalo de Medicina Estética EMS ya
            está disponible.
          </Text>
        </Section>
        <Hr style={globalMail.hr} />
        <Section
          style={{ ...paddingX, paddingTop: "40px", paddingBottom: "40px" }}
        >
          <Row>
            <Column>
              <Img
                src={`${baseUrl}${
                  giftCard.selectedGiftCardId === 1
                    ? "Images/GiftCard200.png"
                    : giftCard.selectedGiftCardId === 2
                    ? "Images/GiftCard300.png"
                    : "Images/GiftCard500.png"
                }`}
                alt="Imagen Tarjeta de regalo"
                style={{ float: "left" }}
                width="260px"
              />
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
              <Text style={{ ...paragraph, fontWeight: "500" }}>
                Comprador: {giftCard.nameBuyer}
              </Text>
              <Text style={{ ...paragraph, fontWeight: "500" }}>
                Destinatario: {giftCard.nameReceiver}
              </Text>
              <Text style={globalMail.text}>Mensaje:</Text>
              <Text style={globalMail.text}>{giftCard.message}</Text>
            </Column>
          </Row>
        </Section>
        <Hr style={globalMail.hr} />
        <Section style={globalMail.defaultPadding}>
          <Row style={{ display: "inline-flex", marginBottom: 40 }}>
            <Column style={{ width: "170px" }}>
              <Text style={globalMail.paragraphWithBold}>Número de Orden</Text>
              <Text style={track.number}>#{giftCard.id}</Text>
            </Column>
            <Column>
              <Text style={globalMail.paragraphWithBold}>Fecha</Text>
              <Text style={track.number}>
                {new Date().toLocaleDateString()}
              </Text>
            </Column>
          </Row>
        </Section>
        <Hr style={globalMail.hr} />
        <Section style={menu.container}>
          <Row>
            <Text style={menu.title}>Get Help</Text>
          </Row>
          <Row style={menu.content}>
            <Column style={{ width: "33%" }} colSpan={1}>
              <Link href="/" style={menu.text}>
                Shipping Status
              </Link>
            </Column>
            <Column style={{ width: "33%" }} colSpan={1}>
              <Link href="/" style={menu.text}>
                Shipping & Delivery
              </Link>
            </Column>
            <Column style={{ width: "33%" }} colSpan={1}>
              <Link href="/" style={menu.text}>
                Returns & Exchanges
              </Link>
            </Column>
          </Row>
          <Row style={{ ...menu.content, paddingTop: "0" }}>
            <Column style={{ width: "33%" }} colSpan={1}>
              <Link href="/" style={menu.text}>
                How to Return
              </Link>
            </Column>
            <Column style={{ width: "66%" }} colSpan={2}>
              <Link href="/" style={menu.text}>
                Contact Options
              </Link>
            </Column>
          </Row>
          <Hr style={globalMail.hr} />
          <Row style={menu.tel}>
            <Column>
              <Row>
                <Column style={{ width: "16px" }}>
                  <Img
                    src={`${baseUrl}/static/nike-phone.png`}
                    width="16px"
                    height="26px"
                    style={{ paddingRight: "14px" }}
                  />
                </Column>
                <Column>
                  <Text style={{ ...menu.text, marginBottom: "0" }}>
                    1-800-806-6453
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column>
              <Text
                style={{
                  ...menu.text,
                  marginBottom: "0",
                }}
              >
                4 am - 11 pm PT
              </Text>
            </Column>
          </Row>
        </Section>
        <Hr style={{ ...globalMail.hr, marginTop: "12px" }} />
        <Section style={paddingY}>
          <Row style={footer.policy}>
            <Column>
              <Text style={footer.text}>Web Version</Text>
            </Column>
            <Column>
              <Text style={footer.text}>Privacy Policy</Text>
            </Column>
          </Row>
          <Row>
            <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
              Please contact us if you have any questions. (If you reply to this
              email, we wil not be able to see it.)
            </Text>
          </Row>
          <Row>
            <Text style={footer.text}>
              © 2022 Nike, Inc. All Rights Reserved.
            </Text>
          </Row>
          <Row>
            <Text style={footer.text}>
              NIKE, INC. One Bowerman Drive, Beaverton, Oregon 97005, USA.
            </Text>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default RecipeMail;
