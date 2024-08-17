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

const giftCardMock = {
  email: "socorrista92re@gmail.com",
  id: 84,
  message:
    "socorrista92re@gmail.com socorrista92re@gmail.com socorrista92re@gmail.com socorrista92re@gmail.com socorrista92re@gmail.com",
  nameBuyer: "Elvira",
  nameReceiver: "alejandro",
  selectedGiftCardId: 1,
};

const RecipeMail = (giftCard: GiftCardFormGet) => (
  <Html>
    <Head />
    <Preview>Obtenga el resumen de su pedido</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={track.container}>
          <Text style={globalMail.paragraphWithBold}>Número de rastreo</Text>
          <Text style={track.number}>1ZV218970300071628</Text>
        </Section>
        <Hr style={globalMail.hr} />
        <Section style={messageMail}>
          <Img
            src={`${baseUrl}Images/logo.png`}
            width="66"
            height="50"
            alt="Nike"
            style={{ margin: "auto" }}
          />

          <Heading style={globalMail.heading}>
            Tu Tarjeta de Regalo está Lista.
          </Heading>
          <Text style={globalMail.text}>Hola [Nombre del Cliente],</Text>
          <Text style={{ ...globalMail.text, marginTop: 24 }}>
            ¡Felicitaciones! Tu tarjeta de regalo de Medicina Estética EMS ya
            está disponible.
          </Text>
        </Section>
        <Hr style={globalMail.hr} />
        <Section style={globalMail.defaultPadding}>
          <Text style={adressTitle}>Shipping to: Alan Turing</Text>
          <Text style={{ ...globalMail.text, fontSize: 14 }}>
            2125 Chestnut St, San Francisco, CA 94123
          </Text>
        </Section>
        <Hr style={globalMail.hr} />
        <Section
          style={{ ...paddingX, paddingTop: "40px", paddingBottom: "40px" }}
        >
          <Row>
            <Column>
              <Img
                src={`${baseUrl}/static/nike-product.png`}
                alt="Brazil 2022/23 Stadium Away Women's Nike Dri-FIT Soccer Jersey"
                style={{ float: "left" }}
                width="260px"
              />
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
              <Text style={{ ...paragraph, fontWeight: "500" }}>
                Brazil 2022/23 Stadium Away Women Nike Dri-FIT Soccer Jersey
              </Text>
              <Text style={globalMail.text}>Size L (12–14)</Text>
            </Column>
          </Row>
        </Section>
        <Hr style={globalMail.hr} />
        <Section style={globalMail.defaultPadding}>
          <Row style={{ display: "inline-flex", marginBottom: 40 }}>
            <Column style={{ width: "170px" }}>
              <Text style={globalMail.paragraphWithBold}>Order Number</Text>
              <Text style={track.number}>C0106373851</Text>
            </Column>
            <Column>
              <Text style={globalMail.paragraphWithBold}>Order Date</Text>
              <Text style={track.number}>Sep 22, 2022</Text>
            </Column>
          </Row>
          <Row>
            <Column align="center">
              <Link style={globalMail.button}>Order Status</Link>
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
